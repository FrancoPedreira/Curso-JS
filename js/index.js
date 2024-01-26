function sumarProductos(articulo) {
    let cantidad
    let montoFinal = 0
    let remera = 10000
    let buzo = 30000
    let jean = 25500
    let campera = 60000

    while (articulo != '*') {
        cantidad = prompt("Ingrese la cantidad de unidades para este producto");
        cantidad = parseInt(cantidad)

        if (articulo == "1") {
            // console.log("Se sumo el articulo remera al carrito (cantidad : " + cantidad + ")");
            console.log(`Se sumo el articulo remera al carrito (cantidad : ${cantidad})`);
            montoFinal += (remera * cantidad);
        }
        else if (articulo == "2"){
            console.log(`Se sumo el articulo buzo con estampado al carrito (cantidad : ${cantidad})`);
            montoFinal += (buzo * cantidad);
        }
        else if (articulo == "3"){
            // console.log("Se sumo el articulo jean roto holgado al carrito (cantidad : " + cantidad + ")");
            console.log(`Se sumo el articulo jean roto holgado al carrito (cantidad : ${cantidad})`);
            montoFinal += (jean * cantidad);
        }
        else if (articulo == "4"){
            // console.log("Se sumo el articulo campera inflada al carrito (cantidad : " + cantidad + ")");
            console.log(`Se sumo el articulo campera al carrito (cantidad : ${cantidad})`);
            montoFinal += (campera * cantidad);
        }
        articulo = prompt("Seleccione el tipo de producto que desea agregar para su compra: \n 1) Remera lisa - $10.000 \n 2) Buzo con estampado en la espalda - $30.000 \n 3) Jean roto holgado - 25.500 \n 4) Campera rompevientos - 60.000");
    }
    alert("El monto total de tu compra es de $" + montoFinal + " ARS");
    console.log("El monto total de tu compra es de $" + montoFinal + " ARS");
}

function main() {
    let articulo;

    articulo = prompt("Seleccione el tipo de producto que desea agregar para su compra: \n 1) Remera lisa - $10.000 \n 2) Buzo con estampado en la espalda - $30.000 \n 3) Jean roto holgado - 25.500 \n 4) Campera rompevientos - 60.000");
    sumarProductos(articulo);
}

main();