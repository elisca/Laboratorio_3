import Persona from './personas.js';

hardcodearLS("arrayPersonas");
let arrayPersonas=cargarDatos("arrayPersonas");
console.log(arrayPersonas);

function hardcodearLS(clave){
    const auxArrayPersonas2=[
        new Persona(0,"Adrian","Lisca","adrian.lisca@hotmail.com",54),
        new Persona(1,"Viviana","Sciume","viviana.sciume@hotmail.com",50),
        new Persona(2,"Ezequiel","Lisca","ezequiel.lisca@hotmail.com",29),
        new Persona(3,"Ariel","Lisca","ariel.lisca@hotmail.com",25)
    ];

    const auxArrayPersonas=auxArrayPersonas2.map(castearObjectAPersona());

    localStorage.setItem(clave,JSON.stringify(auxArrayPersonas));

    console.log("Array generado en LS.");
    console.log(localStorage.getItem(clave));
}

function cargarDatos(clave){
    return JSON.parse(localStorage.getItem(clave)) || [];
}

function guardarDatos(clave,datos){
    localStorage.setItem(clave,JSON.stringify(datos));
}

function castearObjectAPersona(){
    if(item!=null){
        auxPers=new Persona(0,"Nombre","Apellido","nombre.apellido@dominio.com.ar",0);
        return auxPers;
    }
    console.error("Error");
    return null;
}