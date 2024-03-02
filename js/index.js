//Pido lo que necesito al HTML
const GETDIRECTION = document.getElementById("direccion");
const ALLPRODUCTS = document.getElementById("contenedor-productos");
const BOTONESCATEGORIAS = document.querySelectorAll(".boton-categoria");
const TITULOPRINCIPAL = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
const numerito = document.querySelector("#numerito");

function agregarDireccion(direccionUsuario) {
    direccionUsuario = direccionUsuario.charAt(0).toUpperCase() + direccionUsuario.slice(1);

    const DIRECCION = document.createElement("div");
    DIRECCION.classList.add("direccion");
    DIRECCION.innerHTML = `
                           <p><i class="bi bi-geo-alt"></i> Enviar a: ${direccionUsuario}</p></i>
                          `
    GETDIRECTION.appendChild(DIRECCION);
}

function obtenerDireccion() {
    // Obtener la dirección guardada en sessionStorage
    let direccionGuardada = sessionStorage.getItem("direccionUsuario");

    // Si la dirección no está almacenada, o si la página se abre por primera vez, solicitar la dirección
    if (!direccionGuardada) {
        document.addEventListener("DOMContentLoaded", () => {
            Swal.fire({
                title: "Ingrese la dirección donde desea enviar sus pedidos.",
                input: "text",
            }).then((result) => {
                if (result.isConfirmed) {
                    let direccionUsuario = result.value;
                    // Guardar la dirección en sessionStorage
                    sessionStorage.setItem("direccionUsuario", direccionUsuario);
                    // Agregar la dirección al DOM
                    agregarDireccion(direccionUsuario);
                }
            });
        });
    } else {
        // Si la dirección está almacenada, agregarla al DOM directamente
        agregarDireccion(direccionGuardada);
    }
}

class Producto {
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const productosArray = [
    new Producto("abrigo-1", "Campera Jean", "/images/abrigos/01.jpg", 2000),
    new Producto("abrigo-2", "Buzo Crema", "/images/abrigos/02.jpg", 2000),
    new Producto("abrigo-3", "Campera Impermeable", "/images/abrigos/03.jpg", 2000),
    new Producto("abrigo-4", "Sobretodo Marron", "/images/abrigos/04.jpg", 2000),
    new Producto("pantalon-5", "Pantalon Skinny Fit", "/images/pantalones/01.jpg", 2000),
    new Producto("pantalon-6", "Bermuda Jogger", "/images/pantalones/02.jpg", 2000),
    new Producto("pantalon-7", "Pantalon Negro", "/images/pantalones/03.jpg", 2000),
    new Producto("pantalon-8", "Pantalon Estructura", "/images/pantalones/04.jpg", 2000),
    new Producto("pantalon-9", "Pantalon Cargo", "/images/pantalones/05.jpg", 2000),
    new Producto("remera-10", "Remera Piqué", "/images/remeras/01.jpg", 2000),
    new Producto("remera-11", "Remera Azul", "/images/remeras/02.jpg", 2000),
    new Producto("remera-12", "Chomba Violeta", "/images/remeras/03.jpg", 2000),
    new Producto("remera-13", "Remera Blanca", "/images/remeras/04.jpg", 2000),
    new Producto("remera-14", "Remera Punto", "/images/remeras/05.jpg", 2000)
]

function agregarProductos(productosElegidos) {
    ALLPRODUCTS.innerHTML = ""; //Aca lo que hago es que cada vez que empieza esta funcion se vuelven a cargar las cards

    productosElegidos.forEach(producto => {
        const CARD = document.createElement("div");
        CARD.innerHTML = `
                        <div class="producto">
                            <img class="producto-imagen" src="${producto.imagen}" alt="">
                            <div class="producto-detalles">
                                <h3 class="producto-titulo">${producto.nombre}</h3>
                                <p>$${producto.precio}</p>
                                <button class="producto-agregar" id = "${producto.id}">Agregar al Carrito</button>
                            </div>
                        </div>
                         `
        ALLPRODUCTS.appendChild(CARD);
    });
    actualizarBotonesAgregar();
}

const categorias = {
    "remeras": "remera",
    "abrigos": "abrigo",
    "pantalones": "pantalon"
};

BOTONESCATEGORIAS.forEach(boton => {
    boton.addEventListener("click", (e) => {
        BOTONESCATEGORIAS.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const categoriaSeleccionada = categorias[e.currentTarget.dataset.categoria];

        if (categoriaSeleccionada) {
            const nombreCategoria = e.currentTarget.innerText.trim();
            TITULOPRINCIPAL.innerText = nombreCategoria;
            const PRODUCTOSFILTRADOS = productosArray.filter(producto => producto.id.startsWith(categoriaSeleccionada));
            agregarProductos(PRODUCTOSFILTRADOS);
        } else {
            // Si la categoría no está definida, mostrar todos los productos
            TITULOPRINCIPAL.innerText = "Todos los productos";
            agregarProductos(productosArray);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;
const PRODENCARRITOls = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (PRODENCARRITOls) {
    productosEnCarrito = PRODENCARRITOls
    actualizarNumero();
} else {
    productosEnCarrito = []
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const PRODUCTOAGREGADO = productosArray.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++;
    } else {
        PRODUCTOAGREGADO.cantidad = 1;
        productosEnCarrito.push(PRODUCTOAGREGADO);
    }
    Toastify({
        text: "El producto fue agregado a tu carrito",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #bb0033, #ff3169)",
          },
        }).showToast();  
    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerHTML = nuevoNumerito;
}

function main() {
    obtenerDireccion();
    agregarProductos(productosArray);
}

main();