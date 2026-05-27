//Crear una interface llamada Cliente con los campos: id, nombre, correo, telefono y activo.
//Crear un arreglo de clientes y filtrar únicamente aquellos que estén activos.
//Mostrar el resultado en consola.
interface Cliente {
    id: number;
    nombre: string;
    correo: string;
    telefono: string;
    activo: boolean;
} 
let clientes: Cliente[] = [
    { id: 1, nombre: "Flader", correo: "flader@example.com", telefono: "55652.3", activo: true },
    { id: 2, nombre: "Milena", correo: "milena@example.com", telefono: "5662", activo: false },
    { id: 3, nombre: "Juan", correo: "juan@example.com", telefono: "322455", activo: true }
];

const clientesActivos = clientes.filter(cliente => cliente.activo);

console.log("Clientes activos:");
console.log(clientesActivos);