//  Crear una función que reciba el id de un producto y una nueva cantidad de stock.

//La función debe buscar el producto en el arreglo y actualizar su stock. Si el producto no existe, 
//debe mostrar un mensaje indicando que no fue encontrado.
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}


function actualizarStock(id: number, nuevaCantidad: number) {
    const producto = productos.find(prod => prod.id === id);  
  }

   