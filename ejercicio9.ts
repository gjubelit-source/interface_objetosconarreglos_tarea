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