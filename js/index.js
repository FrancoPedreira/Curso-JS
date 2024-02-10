// Podrias usar lo que vimos hace 2 clases: metodos como filter(); filtras el array por una categoria, ej: "remeras", y mostras en la seccion solo las remeras.

// const SECCIONES = [
//     {text: "Todos los productos", url: "../index.html"},
//     {text: "Todos los productos", url: "../index.html"},
//     {text: "Todos los productos", url: "../carrito.html"}
// ]

//Pido lo que necesito al HTML
const GETDIRECTION = document.getElementById("direccion");
const ALLPRODUCTS = document.getElementById("contenedor-productos");

//Pido datos al usuario para mostrarlos en pantalla simulando por ejemplo que la ubicación ingresada es donde se van a entregar los productos
//let nombreUsuario = prompt("Por favor, ingrese su nombre");
let direccionUsuario = prompt("Por favor, ingrese la dirección en la que se entregaran los pedidos");

if (direccionUsuario) {
    direccionUsuario = direccionUsuario.charAt(0).toUpperCase() + direccionUsuario.slice(1); // Convertimos la primera letra a mayúscula y concatenamos el resto de la cadena
}

function agregarDireccon(direccionUsuario) {
    const DIRECCION = document.createElement("div");
    DIRECCION.classList.add("direccion");
    DIRECCION.innerHTML = `
                           <p><i class="bi bi-geo-alt"></i> Enviar a: ${direccionUsuario}</p></i>
                          `
    GETDIRECTION.appendChild(DIRECCION);
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
    new Producto("1", "Campera Jean", "/images/abrigos/01.jpg", 2000),
    new Producto("2", "Buzo Crema", "/images/abrigos/02.jpg", 2000),
    new Producto("3", "Campera Impermeable", "/images/abrigos/03.jpg", 2000),
    new Producto("4", "Sobretodo Marron", "/images/abrigos/SacoMujer.jpg", 2000),
    new Producto("5", "Pantalon Skinny Fit", "/images/pantalones/01.jpg", 2000),
    new Producto("6", "Bermuda Jogger", "/images/pantalones/02.jpg", 2000),
    new Producto("7", "Pantalon Cinturon Combinado", "/images/pantalones/03.jpg", 2000),
    new Producto("8", "Pantalones Estructura", "/images/pantalones/04.jpg", 2000),
    new Producto("9", "Pantalones Cargo", "/images/pantalones/05.jpg", 2000),
    new Producto("10", "Remera Piqué", "/images/remeras/01.jpg", 2000),
    new Producto("11", "Remera Básica Azul", "/images/remeras/02.jpg", 2000),
    new Producto("12", "Chomba Violeta", "/images/remeras/03.jpg", 2000),
    new Producto("13", "Remera Estampado Combinado", "/images/remeras/04.jpg", 2000),
    new Producto("14", "Remera Punto", "/images/remeras/05.jpg", 2000)
]

function agregarProductos(productos) {
    productos.forEach(producto => {
        const CARD = document.createElement("div");
        CARD.innerHTML = `
                        <div class="producto">
                            <img class="producto-imagen" src="${producto.imagen}" alt="">
                            <div class="producto-detalles">
                                <h3 class="producto-titulo">${producto.nombre}</h3>
                                <p>$${producto.precio}</p>
                                <button class="producto-agregar">Agregar al Carrito</button>
                            </div>
                        </div>
                         `
        ALLPRODUCTS.appendChild(CARD);
    });
}

function main() {
    agregarProductos(productosArray);
    agregarDireccon(direccionUsuario);
}

main();