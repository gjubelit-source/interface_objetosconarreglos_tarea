//Crear una interface llamada Cita para representar citas de una peluquería o negocio de servicios.
//Cada cita debe tener: id, cliente, servicio, fecha, hora y estado.
//El estado solo puede ser: pendiente, realizada o cancelada.
//Crear un arreglo de citas y mostrar únicamente las citas pendientes.

interface Cita {
    id: number;
    cliente: string;
    servicio: string;
    fecha: string;
    hora: string;
    estado: "pendiente" | "realizada" | "cancelada";
}
let citas: Cita[] = [
    { id: 1, cliente: "Jefry", servicio: "Corte de cabello", fecha: "2024-07-01", hora: "10:00", estado: "pendiente" },
    { id: 2, cliente: "Alexander", servicio: "Endoscopia", fecha: "2024-07-02", hora: "14:00", estado: "realizada" },
    { id: 3, cliente: "Camilo", servicio: "Ecografia", fecha: "2024-07-03", hora: "16:00", estado: "cancelada" },
    { id: 4, cliente: "Miguel", servicio: "RadioGrafia", fecha: "2024-07-04", hora: "11:00", estado: "pendiente" },
    { id: 5, cliente: "Sofía", servicio: "Tratamiento facial", fecha: "2024-07-05", hora: "13:00", estado: "pendiente" }
];

let citasPendientes = citas.filter(cita => cita.estado === "pendiente");
console.log("Citas pendientes:");
console.log(citasPendientes);