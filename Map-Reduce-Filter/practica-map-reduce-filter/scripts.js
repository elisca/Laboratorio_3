import Persona from "./personas.js";

const p1=new Persona(1,
    "Ezequiel",
    "Lisca",
    "ezequiel.lisca@live.com",
    29);

const p2=new Persona(2,
    "Ariel",
    "Lisca",
    "ariel.lisca@live.com",
    25);    

const p3=new Persona(3,
    "Adrian",
    "Lisca",
    "adrian.lisca@live.com",
    54);

const p4=new Persona(4,
    "Viviana",
    "Sciume",
    "viviana.sciume@live.com",
    50);

const personas=[p1,p2,p3,p4];

console.info(personas);

//Filter menores de 50
const personasMenores50=personas.filter(menor50);
console.info(personasMenores50);

function menor50(persona){
    return persona.edad<50;
}

//Reduce acumular edades
let acumEdades=personas.map(persona=>persona.Edad);
acumEdades=acumEdades.reduce(acumularEdades,0);
console.info(acumEdades);

function acumularEdades(prev,act){
    return prev+act;
}

//Mapeo quitar 5 años
const personasEdad=personas.map(reducirEdad);
console.info(personasEdad);

function reducirEdad(persona){
    persona.Edad-=5;
    return persona;
}