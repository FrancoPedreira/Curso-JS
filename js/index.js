// function sumarProductos(articulo) {
//     let cantidad
//     let montoFinal = 0
//     let remera = 10000
//     let buzo = 30000
//     let jean = 25500
//     let campera = 60000

//     while (articulo != '*') {
//         cantidad = prompt("Ingrese la cantidad de unidades para este producto");
//         cantidad = parseInt(cantidad)

//         if (articulo == "1") {
//             // console.log("Se sumo el articulo remera al carrito (cantidad : " + cantidad + ")");
//             console.log(`Se sumo el articulo remera al carrito (cantidad : ${cantidad})`);
//             montoFinal += (remera * cantidad);
//         }
//         else if (articulo == "2"){
//             console.log(`Se sumo el articulo buzo con estampado al carrito (cantidad : ${cantidad})`);
//             montoFinal += (buzo * cantidad);
//         }
//         else if (articulo == "3"){
//             // console.log("Se sumo el articulo jean roto holgado al carrito (cantidad : " + cantidad + ")");
//             console.log(`Se sumo el articulo jean roto holgado al carrito (cantidad : ${cantidad})`);
//             montoFinal += (jean * cantidad);
//         }
//         else if (articulo == "4"){
//             // console.log("Se sumo el articulo campera inflada al carrito (cantidad : " + cantidad + ")");
//             console.log(`Se sumo el articulo campera al carrito (cantidad : ${cantidad})`);
//             montoFinal += (campera * cantidad);
//         }
//         articulo = prompt("Seleccione el tipo de producto que desea agregar para su compra: \n 1) Remera lisa - $10.000 \n 2) Buzo con estampado en la espalda - $30.000 \n 3) Jean roto holgado - 25.500 \n 4) Campera rompevientos - 60.000");
//     }
//     alert("El monto total de tu compra es de $" + montoFinal + " ARS");
//     console.log("El monto total de tu compra es de $" + montoFinal + " ARS");
// }

// function main() {
//     let articulo;

//     articulo = prompt("Seleccione el tipo de producto que desea agregar para su compra: \n 1) Remera lisa - $10.000 \n 2) Buzo con estampado en la espalda - $30.000 \n 3) Jean roto holgado - 25.500 \n 4) Campera rompevientos - 60.000");
//     sumarProductos(articulo);
// }

// main();

// Podrias usar lo que vimos hace 2 clases: metodos como filter(); filtras el array por una categoria, ej: "remeras", y mostras en la seccion solo las remeras.

// const SECCIONES = [
//     {text: "Todos los productos", url: "../index.html"},
//     {text: "Todos los productos", url: "../index.html"},
//     {text: "Todos los productos", url: "../carrito.html"}
// ]

class Producto {
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const productosArray = [
    new Producto("1", "Campera Jean", "images/abrigos/01.jpg", 2000),
    new Producto("2", "Buzo Crema", "images/abrigos/02.jpg", 2000),
    new Producto("3", "Campera Impermeable", "images/abrigos/03.jpg", 2000),
    new Producto("4", "Sobretodo Marron", "images/abrigos/SacoMujer.jpg", 2000),
    new Producto("5", "Pantalon Skinny Fit", "images/pantalones/01.jpg", 2000),
    new Producto("6", "Bermuda Jogger", "images/pantalones/02.jpg", 2000),
    new Producto("7", "Pantalon Cinturon Combinado", "images/pantalones/03.jpg", 2000),
    new Producto("8", "Pantalones Estructura", "images/pantalones/04.jpg", 2000),
    new Producto("9", "Pantalones Cargo", "images/pantalones/05.jpg", 2000),
    new Producto("10", "Remera Piqué", "images/remeras/01.jpg", 2000),
    new Producto("11", "Remera Básica Azul", "images/remeras/02.jpg", 2000),
    new Producto("12", "Chomba Violeta", "images/remeras/03.jpg", 2000),
    new Producto("13", "Remera Estampado Combinado", "images/remeras/04.jpg", 2000),
    new Producto("14", "Remera Punto", "images/remeras/05.jpg", 2000)
]

const ALLPRODUCTS = document.getElementById("contenedor-productos");

function agregarProductos(productos) {
    productos.forEach(producto => {
        const CARD = document.createElement("div");
        CARD.classList.add("card");
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

agregarProductos(productosArray);