import {mascota} from "./mascota.js";
import {animal} from "./animal.js";

const a=new Animal("Vaca",5);
const b=new Mascota("Bobby",3,"Perro",true);

console.log(a);
console.log(b);

a.presentarse();
b.presentarse();

console.log(a.presentarse);
console.log(b.presentarse);

const frutas=['pera','banana','manzana'];

/*
let f1=frutas[0];
let f2=frutas[1];
let f3=frutas[2];
*/
let [f1,f2,f3]=frutas;

console.log(f1);
console.log(f2);
console.log(f3);

const obj={
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
};

//Destructuración
/*
let nombre=obj.nombre;
let apellido=obj.apellido;
let edad=obj.edad;
*/

let {edad,apellido,nombre}=obj;