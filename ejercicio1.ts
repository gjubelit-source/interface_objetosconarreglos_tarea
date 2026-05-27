//Crear una interface llamada Estudiante para representar la información básica de varios estudiantes.
//Cada estudiante debe tener: id, nombre, edad, programa y promedio.

//Crear un arreglo con mínimo 5 estudiantes y mostrar todos los registros en consola.

interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
    programa: string;
    promedio: number;
} 
let estudiantes: Estudiante[] = [
    { id: 1, nombre: "Juan", edad: 25, programa: "Ingeniería", promedio: 8.5 },
    { id: 2, nombre: "Maye", edad: 22, programa: "Medicina", promedio: 9.0 },    
    { id: 3, nombre: "Carlos", edad: 30, programa: "Análisis de Sistemas", promedio: 7.5 },
    { id: 4, nombre: "Yesenia", edad: 21, programa: "Arquitectura", promedio: 6.0 },
    { id: 5, nombre: "Sofía", edad: 23, programa: "Psicología", promedio: 9.5 },
    { id: 6, nombre: "Flader", edad: 27, programa: "Ingeniería", promedio: 8.5 },
]