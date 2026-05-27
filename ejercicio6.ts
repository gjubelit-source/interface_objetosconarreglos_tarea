//Usando un arreglo de productos, calcular el valor total del inventario.

//El valor total debe obtenerse multiplicando el precio de cada producto por su cantidad en stock y sumando todos los resultados.
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}   
let productoss: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 1500, stock: 10, categoria: "Electrónica" },
    { id: 2, nombre: "Smartphone", precio: 800, stock: 20, categoria: "Electrónica" },]