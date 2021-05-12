//Corregir funcion vaciarContenedor...
//Revisar funcion handlerDeleteList...
//Corregir funcion crearTBody
//Crear handler para cada tr y hacerlo funcionar
import Persona from './personas.js';

/*
console.log(marcas);
const texto=JSON.stringify(marcas);//Convierte un array JSON a texto
console.log(texto);
const obj=JSON.parse(texto);//Convierte un texto a JSON
console.log(obj);
*/

//Borrador con solución poco eficiente
function handlerClickTD(){
    console.log(e.target.parentNode.firstElementChild.textContent);//Toma el TD de la fila
}

//Crea una tabla dinámicamente en base a un array
function crearTabla(items){
    const tabla=document.createElement('table');
    tabla.appendChild(crearTHead(items[0]));//Traemos un encabezado pasando primer elemento como modelo
    tabla.appendChild(crearTBody(items));//Traemos el contenido de la tabla en base al array

    //tabla.setAttribute('style','border: 1px solid black;border-collapse:collapse');
}

//Crear un encabezado de tabla en base a las claves de un elemento modelo
function crearTHead(item){
    const thead=document.createElement('thead');
    const tr=document.createElement('tr');

    const claves=Object.keys(item);

    tr.style.backgroundColor='blue';//Es mala práctica

    claves.forEach(elemento=>{
        const th=document.createElement('th');
        const contenidoClave=document.createTextNode(elemento);

        th.appendChild(contenidoClave);
        //th.setAttribute('style','border: 1px solid black');
        
        tr.appendChild(th);
    });

    thead.appendChild(tr);

    return thead;
}

//Crear contenido de tabla en base a un array
function crearTBody(items){
    const tbody=document.createElement('tbody');

    items.forEach(elemento=>{
        const tr=document.createElement('tr');

        for (const key in item) {
            if(key=='id'){
                tr.setAttribute('data-id',item[key]);        
            }
            else{
                const td=document.createElement('td');
                tr.appendChild(td);
            }
        }
        elemento.forEach(datoElemento=>{
            const td=document.createElement('td');
            const contElemento=document.createTextNode(datoElemento);
            td.appendChild(datoElemento);
            //td.setAttribute('style','border: 1px solid black');
            //td.style.setProperty('border','1px solid black');
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    return tbody;
}

let boton=null;
let persona=[]; 
boton=document.getElementById('btnLista');

boton.addEventListener('click',handlerLoadList); //Agrega manejador al evento

function handlerClick(e){//Si hice clic en el botón avisa
    if(!e.target.matches("td")) return;

    let id=e.target.parentNode.firstElementChild.textContent;
    console.log(id);
    /*
    console.log(e.target);
    if(element.matches('#btnLista')){//Argumento es un selector de CSS
        console.log("Hiciste clic en el botón");
    }
    */      
}

/*
window.addEventListener('DOMContentloaded',()=>{
    document.forms[0].addEventListener('submit', handlerSubmit);
    boton=document.getElementById('btnLista');
    boton.addEventListener('click',handlerLoadList);
});

/*Manejador del evento clic del botón(debe recibir evento)
e.target es el accionador
*/

//Recibe un formulario
function handlerSubmit(e){
    e.preventDefault();
    console.log("Dando de alta");
    const frm=e.target;
    console.log(frm.nombre.value);
    console.log(frm.email.value);
    console.log(frm.sexo.value);
    const nuevaPersona=new Persona(Date.now(),frm.nombre.value,frm.email.value,frm.sexo.value);
    console.log(nuevaPersona);
}

function altaPersona(p){
    personas.push(p);
    handlerLoadList();
}

function handlerLoadList(e){
    renderizarLista(crearLista(personas),document.getElementById('divLista'));
    const emisor=e.target;
    emisor.textContent="Remover lista";
    emisor.removeEventListener('click',handlerLoadList);//Remueve manejador del evento
    emisor.addEventListener('click',handlerDeleteList);
}

//Elimina lista
function handlerDeleteList(e){
    vaciarContenedor(document.getElementById('divLista'));
    const emisor=e.target;
    emisor.textContent="Cargar lista";
    emisor.removeEventListener('click',handlerDeleteList);
    emisor.addEventListener('click',handlerLoadList);
}

//Adjunta lista de datos a un contenedor
function renderizarLista(lista,contenedor){
    vaciarContenedor(contenedor);
    if(lista){
        contenedor.appendChild(lista);        
    }
}

//Vacía un contenedor, elimina todos sus nodos
function vaciarContenedor(contenedor){
    //contenedor.innerHTML="";Limpia el contenedor de manera precaria

    //Limpia el contenedor liberando también nodos en memoria
    while(contenedor.hasChildNode){//Mientras tenga nodos hijos...
        contenedor.removerChild(contenedor.firstChildNode);//Remueve el primer nodo hijo
    }
}

//Crea una lista no ordenada con items de un array
function crearLista(items){
    const lista=document.createElement('ul');

    items.forEach(element => {
        const li=document.createElement('li');
        const contenido=document.createTextNode(element.marcas);
        li.appendChild(contenido);
        lista.appendChild(li);
    });

    return lista;
}