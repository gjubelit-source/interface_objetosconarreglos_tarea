//Crear una interface llamada Producto para representar productos de una tienda.
//Cada producto debe tener: id, nombre, precio, stock y categoria.

//Crear un arreglo con mínimo 5 productos y mostrar la lista completa en consola.
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}      
let productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 1500, stock: 10, categoria: "Electrónica" },
    { id: 2, nombre: "Smartphone", precio: 800, stock: 20, categoria: "Electrónica" },
    { id: 3, nombre: "Camiseta", precio: 25, stock: 50, categoria: "Ropa" },
    { id: 4, nombre: "Zapatos", precio: 100, stock: 30, categoria: "Calzado" },
    { id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "Libros" }
]