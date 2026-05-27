"use strict";
//Usando la interface Producto, crear una función que permita agregar un nuevo producto al arreglo.
//Después de agregarlo, mostrar en consola el arreglo actualizado.
function agregarProducto(producto) {
    productos.push(producto);
    console.log("Producto agregado:");
    console.log(productos);
}
