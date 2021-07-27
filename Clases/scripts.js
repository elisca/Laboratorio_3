import Persona, { Empleado } from './persona.js';

const p00=new Persona(1,"Ezequiel","Lisca",29);
const e00=new Empleado(1,"Ezequiel","Lisca",29,"Programador",78000);

console.log(p00);
console.log(p00.getDni());

p00.setNombre("Pollo");

console.log(p00.getNombre());

console.log(Persona.MostrarTipo());

console.log(p00.toString());