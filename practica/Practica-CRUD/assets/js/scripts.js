//El inicializador no se carga, no toma el evento
import Persona from './personas.js';
import {cargarDatos,guardarDatos,borrarDato,borrarDatos} from './ls.js';
import crearTabla from './tablas.js';

const divTablaDatos=document.getElementById("divTablaDatos");

const btnAgregarPers=document.getElementById("btnAgregar");
const btnModificarPers=document.getElementById("btnModificar");
const btnEliminarPers=document.getElementById("btnEliminar");
const btnEliminarBD=document.getElementById("btnEliminarTodo");
const btnResetForm=document.getElementById("btnReset");

const inId=document.getElementById("idId");
const inNombre=document.getElementById("idNombre");
const inApellido=document.getElementById("idApellido");
const inEmail=document.getElementById("idEmail");
const inEdad=document.getElementById("idEdad");

const rutaSpinner="./assets/img/spinner-cargando.gif";
const esperaSpinner=1000;

let arrayPersonas=null;
let idArrayPersonas=null;
inicializarManejadores();
renderizarTabla(divTablaDatos,crearTabla(arrayPersonas,false));

window.addEventListener('load',e=>inicializarManejadores);

function inicializarManejadores(e){
    console.log("Inicializando manejadores...");
    arrayPersonas=cargarDatos("arrayPersonas");
    idArrayPersonas=cargarDatos("idArrayPersonas");
    if(idArrayPersonas.length==0)
        idArrayPersonas=-1;
}

function renderizarTabla(contenedor,tabla){
    if(contenedor!=null && tabla!=null){        
        vaciarContenedor(contenedor);
        divTablaDatos.appendChild(tabla);
    }
}

function vaciarContenedor(contenedor){
    if(contenedor!=null)
        while(contenedor.hasChildNodes())
            contenedor.removeChild(contenedor.firstChild);
}

btnAgregarPers.addEventListener('click',(e)=>{
    e.preventDefault();
    idArrayPersonas=idArrayPersonas+1;
    let auxPers=new Persona(parseInt(idArrayPersonas),
        inNombre.value,
        inApellido.value,
        inEmail.value,
        parseInt(inEdad.value)
    );

    crearSpinner(divTablaDatos,rutaSpinner);

    setTimeout(() => {        
        Persona.altaPersona(arrayPersonas,auxPers);
        renderizarTabla(divTablaDatos,crearTabla(arrayPersonas,false));
    }, esperaSpinner);
});

btnModificarPers.addEventListener('click',(e)=>{
    let auxPers=new Persona(parseInt(inId.value),
        inNombre.value,
        inApellido.value,
        inEmail.value,
        parseInt(inEdad.value)
    );
    Persona.modificarPersona(arrayPersonas,auxPers);
    renderizarTabla(divTablaDatos,crearTabla(arrayPersonas,false));
});

btnEliminarPers.addEventListener('click',(e)=>{
    let auxPers=new Persona(inId.value,
        inNombre.value,
        inApellido.value,
        inEmail.value,
        parseInt(inEdad.value)
    );
    Persona.bajaPersona(arrayPersonas,auxPers);
    if(arrayPersonas.length>0)
        renderizarTabla(divTablaDatos,crearTabla(arrayPersonas,false));
    else
        vaciarContenedor(divTablaDatos);
});

btnEliminarBD.addEventListener('click',(e)=>{
    borrarDatos();
    arrayPersonas.splice(0);
    idArrayPersonas=-1;
    if(localStorage.length==0)
        vaciarContenedor(divTablaDatos);
});

btnResetForm.addEventListener('click',(e)=>{

});

window.addEventListener('click',(e)=>{
    const trMetaData=e.target.parentNode.dataset;
    let idTr=trMetaData.id;
    if(idTr>=0){        
        inId.value=idTr;
        inNombre.value=trMetaData.nombre;
        inApellido.value=trMetaData.apellido;
        inEmail.value=trMetaData.email;
        inEdad.value=trMetaData.edad;
    }
});

function crearSpinner(contenedor,archivo){
    const spinner=document.createElement("img");
    spinner.setAttribute("src",archivo);
    spinner.setAttribute("alt","spinner");
    vaciarContenedor(contenedor);
    contenedor.appendChild(spinner);
}
