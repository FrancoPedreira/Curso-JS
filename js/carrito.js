const PRODENCARRITO = JSON.parse(localStorage.getItem("productos-en-carrito"));
const CANTENCARRITO = localStorage.getItem("ItemsCarrito");

const CONTCARRITOVACIO = document.querySelector("#carrito-vacio");
const CONTCARRITOPRODUCTOS = document.querySelector("#carrito-productos");
const CONTCARRITOACCIONES = document.querySelector("#carrito-acciones");
const CONTCARRITOCOMPRADO = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductosCarrito() {
    if (PRODENCARRITO) {
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
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito());
    })
}

function eliminarDelCarrito(){
    let idBoton = e.currentTarget.id;
    console.log(idBoton);
}