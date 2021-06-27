import {marcas} from './marcas.js';

/*
console.log(marcas);
const texto=JSON.stringify(marcas);//Convierte un array JSON a texto
console.log(texto);
const obj=JSON.parse(texto);//Convierte un texto a JSON
console.log(obj);
*/

let boton=null;
boton=document.getElementById('btnLista');

boton.addEventListener('click',handlerLoadList); //Agrega manejador al evento

/*
window.addEventListener('DOMContentloaded',()=>{
    boton=document.getElementById('btnLista');

    boton.addEventListener('click',handlerLoadList);
});
*/

/*Manejador del evento clic del botón(debe recibir evento)
e.target es el accionador
*/
function handlerLoadList(e){
    renderizarLista(crearLista(marcas),document.getElementById('divLista'));
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
    while(contenedor.hasChildNodes()){//Mientras tenga nodos hijos...
        contenedor.removeChild(contenedor.firstChild);//Remueve el primer nodo hijo
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