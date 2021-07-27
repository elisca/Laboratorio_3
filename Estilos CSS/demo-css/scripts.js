//Funciones
function sumar(n1,n2){
    return n1+n2;
}

//Parametros opcionales
function restar(n1=0,n2=0){
    return n1-n2;
}

//Template strings
function saludar(nombre='nombre',edad=0){
    console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
    console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
}

//Funciones declaradas
function funcionDeclarada(){
    console.log("Esta es una funcion declarada, se puede invocar en cualquier parte de nuestro codigo.");
}

//Funciones expresadas(no aplica hoisting)
const funcionExpresada = function(){
    console.log("Esta es una funcion expresada, se asigna una funcion anonima a la constante.");
}

//Funciones autoejecutables
/*(function (){
    console.log("Esta es una funcion autoejecutable.");
})();*/

let $suma=sumar(10,20);
console.log($suma);

let $resta=restar();
console.log($resta);

saludar("Ezequiel",29);

funcionDeclarada();
funcionExpresada();