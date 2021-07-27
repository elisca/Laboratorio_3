const arrayRaro=new Array();

const arrayStandard=[10,false,'Maggie',['a','b','c']];

console.log(arrayStandard[3]);

const arrayObjetos=[
    {nombre: "Maggie", edad: 5},
    {nombre: "Luna", edad: 10},
    {nombre: "Cami", edad: 8},
];

console.log(arrayObjetos[0]);
console.log(arrayObjetos[0].nombre);

const colores=['Rojo','Verde','Azul'];

console.log(colores);
console.log(colores.length);

colores.push('Celeste');//Apila un elemento al array
console.log(colores);

colores.pop();//Desapila un elemento del array
console.log(colores);

const incluyeVerde=colores.includes('Verde');//Indica si un elemento existe dentro del array
console.log(incluyeVerde);

const arrayRelleno=Array(5).fill([1,2,3]);//Completamos el array con elementos default
console.log(arrayRelleno);

const navegacion=['home','about','contact','login'];
/*
navegacion.forEach(
    function (elemento,index,arrayOriginal){
        console.log(`<li id=${index}>${elemento}</li>`);
    }    
)
*/

//Spread operator (operador de propagación)
const superiores=['hombros','brazos','torso'];
const inferiores=['caderas','piernas','rodillas'];
const cuerpo=['cabeza',...superiores,...inferiores,'pies'];//Aplica spread operator

console.log(cuerpo);

console.log(
    [...arrayObjetos,{nombre:'Perlita',edad:12}]);

const a={nombre:'Juan',edad:30};
const b=a;

console.log(a.nombre);

console.log("Resultado: " + sumar(0,0,1,2,3,4,5,6));

//Parametro 'REST'
function sumar(a,b,...c){
    let resultado=0;
    console.log(c);
    resultado=a+b;
    c.forEach(element => {
        resultado+=element;       
    });
    return resultado;
}

//FOROF(arrays)
const frutas=['Manzana','Banana','Pera','Melon'];

for (const i of frutas) {
    console.log(i);
}

//FORIN(objetos)
for (const key in arrayObjetos) {
    console.log(`Clave: ${key} Valor: ${arrayObjetos[key]}`);
    console.log(`Clave: ${key} Valor: ${arrayObjetos[key]}`);
}

//Muestra array con las claves de un objeto
console.log(Object.keys(arrayObjetos));

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
};

//Funcion constructora
function Persona(){
    //Atributos publicos
    this.nombre="Pepe";
    this.edad=40;

    //Atributos privados
    apodo="Pollo";

    //Funcion de instancia
    this.saludar=function(){
        console.log(`Hola soy ${this.nombre}`);
    }

    //Getter
    this.getApodo=function(){
        return apodo;
    }

    //Setter
    this.setApodo=function(value){
        apodo=value;
    }
}

//Funcion de prototipo
Persona.prototype.mostrarTipo=function(){
    console.log(`Hola soy una persona`);
}

let pers=new Persona();
console.log(pers);

//Agrego atributo apellido al objeto
pers.apellido="Perez";
console.log(pers);

pers.saludar();
console.log(pers.getApodo());
pers.setApodo('apodado');
console.log(pers.getApodo());
