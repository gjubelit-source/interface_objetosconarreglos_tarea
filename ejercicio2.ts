//Usando la interface Estudiante, crear un arreglo de estudiantes y
//  filtrar aquellos que tengan un promedio mayor o igual a 3.5.

//Mostrar en consola únicamente los estudiantes aprobados.

interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
    programa: string;
    promedio: number;
}
let estudiante: Estudiante[] = [
    { id: 1, nombre: "Pepitto", edad: 25, programa: "Ingeniería", promedio: 8.5 },
    { id: 2, nombre: "Mayerly", edad: 30, programa: "Medicina", promedio: 9.0 },]

let estudiantesAprobados = estudiantes.filter
(estudiante => estudiante.promedio >= 3.5);
console.log("Estudiantes aprobados:");
console.log(estudiantesAprobados);