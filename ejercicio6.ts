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
    { id: 2, nombre: "tablet", precio: 800, stock: 20, categoria: "Electrónica" },
    { id: 3, nombre: "Chanclas", precio: 25, stock: 50, categoria: "Ropa" },
    { id: 4, nombre: "Zapatos", precio: 100, stock: 30, categoria: "Calzado" },
    { id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "Libros" },
    { id: 6, nombre: "Audífonos", precio: 200, stock: 15, categoria: "Electrónica" },
]
const valorTotalInventario = productoss.reduce((total, producto) =>
     total + (producto.precio * producto.stock), 0);
console.log(`Valor total del inventario: $${valorTotalInventario}`);