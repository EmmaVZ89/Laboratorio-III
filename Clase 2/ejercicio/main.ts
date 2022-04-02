/// <reference path="./persona.ts" />
/// <reference path="./alumno.ts" />

namespace TestPrueba {
  let alumnos: Array<Prueba.Persona> = [
    new Prueba.Alumno("Juan", "Perez", 1111),
    new Prueba.Alumno("Maria", "Rodriguez", 2222),
    new Prueba.Alumno("Gustavo", "Guzman", 3333),
    new Prueba.Alumno("Pedro", "Soria", 4444),
  ];

  alumnos.forEach((a) => console.log(a.ToString()));
}
