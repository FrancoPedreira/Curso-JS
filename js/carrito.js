let PRODENCARRITO = localStorage.getItem("productos-en-carrito");
PRODENCARRITO = JSON.parse(PRODENCARRITO);

const CANTENCARRITO = localStorage.getItem("ItemsCarrito");

const CONTCARRITOVACIO = document.querySelector("#carrito-vacio");
const CONTCARRITOPRODUCTOS = document.querySelector("#carrito-productos");
const CONTCARRITOACCIONES = document.querySelector("#carrito-acciones");
const CONTCARRITOCOMPRADO = document.querySelector("#carrito-comprado");
const BOTONVACIAR = document.querySelector("#carrito-acciones-vaciar");
const CONTTOTAL = document.querySelector("#total");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const BOTONCOMPRAR = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito() {
    if (PRODENCARRITO ) {
        CONTCARRITOVACIO.classList.add("disabled");
        CONTCARRITOPRODUCTOS.classList.remove("disabled");
        CONTCARRITOACCIONES.classList.remove("disabled");
        CONTCARRITOCOMPRADO.classList.add("disabled");

        CONTCARRITOPRODUCTOS.innerHTML = ""; //Aca lo que hago es que cada vez que empieza esta funcion se vuelven a cargar las cards

        PRODENCARRITO.forEach(producto => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${producto.nombre}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `
            CONTCARRITOPRODUCTOS.append(div);
        })
    } else {
        CONTCARRITOVACIO.classList.remove("disabled");
        CONTCARRITOPRODUCTOS.classList.add("disabled");
        CONTCARRITOACCIONES.classList.add("disabled");
        CONTCARRITOCOMPRADO.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = PRODENCARRITO.findIndex(producto => producto.id === idBoton);
    PRODENCARRITO.splice(index, 1);

    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(PRODENCARRITO));
}

BOTONVACIAR.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${PRODENCARRITO.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            PRODENCARRITO.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(PRODENCARRITO));
            cargarProductosCarrito();
        }
      })
}

function actualizarTotal() {
    const totalCalculado = PRODENCARRITO.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

BOTONCOMPRAR.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    Swal.fire({
        title: "Compra Realizada!",
        text: "Muchas gracias por elegirnos!",
        icon: "success"
      });
    PRODENCARRITO.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(PRODENCARRITO));
    
    CONTCARRITOVACIO.classList.add("disabled");
    CONTCARRITOPRODUCTOS.classList.add("disabled");
    CONTCARRITOACCIONES.classList.add("disabled");
    CONTCARRITOCOMPRADO.classList.remove("disabled");

}