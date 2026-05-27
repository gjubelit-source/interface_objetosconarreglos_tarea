//Crear una función que permita buscar un estudiante dentro de un arreglo usando su id.

//La función debe mostrar el estudiante encontrado o un mensaje indicando que no existe.



function buscarEstudiante(id: number) {
    const estudiante = estudiantes.find(est => est.id === id);
    if (estudiante) {
        console.log("Estudiante encontrado:");
        console.log(estudiante);
    } else {
        console.log("Estudiante no encontrado.");
    }
}