//Usando la interface Producto, crear una función que permita agregar un nuevo producto al arreglo.

//Después de agregarlo, mostrar en consola el arreglo actualizado.


interface Producto {
    id: number; 
}
function agregarProducto(producto: Producto) {
    productos.push(producto);
    console.log("Producto agregado:");
    console.log(productos);
}