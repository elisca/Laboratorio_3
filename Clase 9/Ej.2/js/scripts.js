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

function almacenarDatos(data){
    localStorage.setItem("lista",JSON.stringify(data));
}

let boton=null;
let personas=JSON.parse(localStorage.getItem("lista")) || []; 
boton=document.getElementById('btnLista');

boton.addEventListener('click',handlerLoadList); //Agrega manejador al evento

function handlerClick(e){//Si hice clic en el botón avisa
    if(!e.target.matches("td")){
        let id=e.target.parentNode.firstElementChild.textContent;
        console.log(id);
        /*
        console.log(e.target);
        if(element.matches('#btnLista')){//Argumento es un selector de CSS
            console.log("Hiciste clic en el botón");
        }
        */
        cargarFormulario(id);
    }
    //En caso de presionar "Eliminar"
    else if(e.target.matches("#btnEliminar")){
        let id=parseInt(document.forms[0].id.value);
        console.log("Boton eliminar presionado.");
        
        if(confirm("¿Confirma Eliminación?")){
            let index=personas.findIndex((el)=>el.id==el.id)
            //personas=personas.findIndex((el)=>el.id===id);
            
            /*
            personas=personas.filter(el=>el.id!==id);
            almacenarDatos(personas);
            handlerLoadList();
            */
        }
    }
}

window.addEventListener('DOMContentloaded',()=>{
    document.forms[0].addEventListener('submit', handlerSubmit);
    /*boton=document.getElementById('btnLista');
    boton.addEventListener('click',handlerLoadList);*/
    if(personas.lenght>0){
        handlerLoadList(personas);
    }
});

function limpiarFormulario(frm){
    frm.reset();
    document.getElementById("btnEliminar").classList.add("oculto");
    document.getElementById("btnSubmit").value="Alta persona";
}

function cargarFormulario(id){
    let Persona=null;

    /*
    personas.forEach(persona=>{
        if(persona.id===parseInt(id)){
            Persona=persona;
            console.log(Persona);
        }
    });*/
    
    //Desestructuración
    const {nombre,sexo,email}=personas.filter((p)=>p.id===parseInt(id))[0];
    
    const frm=document.forms[0];
    
    frm.nombre.value=p.nombre;
    frm.email.value=p.email;
    frm.sexo.value=p.sexo;
    frm.id.value=p.id;

    document.getElementById("btnSubmit").value="Modificar";
    //CORREGIR:document.getElementById("btnEliminar").removeAttribute("class",);
}

/*Manejador del evento clic del botón(debe recibir evento)
e.target es el accionador
*/

//Recibe un formulario
function handlerSubmit(e){
    e.preventDefault();
    const frm=e.target;

    if(frm.id.value){
        const personaEditada=new Persona(
            parseInt(frm.id.value),
            frm.nombre.value,
            frm.email.value,
            frm.sexo.value
        );

        agregarSpinner();

        setTimeout(() => {
            altaPersona(nuevaPersona);
        }, 2000);

        if(confirm("¿Confirma modificación?")){
            modificarPersona(personaEditada);
        }
    }
    /*
    limpiarFormulario(e.target);
    console.log("Dando de alta");
    const frm=e.target;
    console.log(frm.nombre.value);
    console.log(frm.email.value);
    console.log(frm.sexo.value);
    const nuevaPersona=new Persona(Date.now(),frm.nombre.value,frm.email.value,frm.sexo.value);
    console.log(nuevaPersona);
    */
}

function agregarSpinner(){
    let spinner=document.createElement("img");
    spinner.setAttribute("src","./img/ghost-spinner.gif");
    spinner.setAttribute("alt","Spinner fantasma");

    document.getElementById("spinner-container").appendChild(spinner);
}

function eliminarSpinner(){
    document.getElementById("spinner-container").innerHTML="";
}

function modificarPersona(p){
    let index=personas.findIndex((per)=>{
        return per.id==id;
    });

    personas.splice(index,1,p);
    almacenarDatos(personas);
}

function altaPersona(p){
    personas.push(p);
    almacenarDatos(personas);
    handlerLoadList();
}

function handlerLoadList(e){
    renderizarLista(crearLista(personas),document.getElementById('divLista'));
    /*
    const emisor=e.target;
    emisor.textContent="Remover lista";
    emisor.removeEventListener('click',handlerLoadList);//Remueve manejador del evento
    emisor.addEventListener('click',handlerDeleteList);
    */
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