class Persona{
    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    }
}

const arrayPersonas=[];

/*
const p00=new Persona('Adrian','Lisca',54);
const p01=new Persona('Viviana','Sciume',50);
const p02=new Persona('Ezequiel','Lisca',29);
const p03=new Persona('Ariel','Lisca',25);

arrayPersonas.push(p00,p01,p02,p03);
*/

//localStorage.setItem('personas',JSON.stringify(arrayPersonas));
//localStorage.removeItem('personas-borrar');

arrayPersonas.push(JSON.parse(localStorage.getItem('personas'))) || [];
console.log(arrayPersonas);