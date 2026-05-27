//Crear una interface llamada Curso que contenga: id, nombre, instructor y un arreglo de calificaciones.

//Crear mínimo 3 cursos y calcular el promedio de calificaciones de cada uno.

//Mostrar en consola el nombre del curso y su promedio correspondiente.

interface Curso {
    id: number;
    nombre: string;
    instructor: string;
    calificaciones: number[];
}             
let cursos: Curso[] = [
    { id: 1, nombre: "Matemáticas", instructor: "Dr. Pérez", calificaciones: [8, 9, 7, 10] },
    { id: 2, nombre: "Historia", instructor: "Prof. Gómez", calificaciones: [6, 7, 8, 5] },     ]   

cursos.forEach(curso => {
    const promedio = curso.calificaciones.reduce((a, b) => a + b, 0) / curso.calificaciones.length;
    console.log(`Curso: ${curso.nombre}, Promedio: ${promedio.toFixed(2)}`);
});