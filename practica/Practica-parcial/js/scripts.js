import {calles} from './arrayCalles.js';
import calle from './calle.js';

const listaCalles=calles;
const formulario=document.forms[0];

const btnAddManejador=document.getElementById('addHandler');
const btnRemoveManejador=document.getElementById('removeHandler');

console.log(calles);

formulario.addEventListener('submit',handlerBoton);

btnAddManejador.addEventListener('click',e=>{
    formulario.addEventListener('submit',manejadorExtra);
});

btnRemoveManejador.addEventListener('click',e=>{
    formulario.removeEventListener('submit',manejadorExtra);
});


function handlerBoton(e){
    e.preventDefault();
    const frm=e.target;
    const nuevaCalle=new calle(frm.txtId.value,frm.txtNombre.value,frm.txtAltura.value);
    listaCalles.push(nuevaCalle);
    console.clear();
    console.log(listaCalles);
}

function crearEncabezado(item){
    const thead=document.createElement('thead');
    const tr=document.createElement('tr');

    const encabezados=Object.keys(item);

    encabezados.forEach(campo => {
        const th=document.createElement('th');
        const contTh=document.createTextNode(campo);

        th.appendChild(contTh);
        tr.appendChild(th);
    });

    thead.appendChild(tr);

    return thead;
}

function crearCuerpo(items){
    const tbody=document.createElement('tbody');
    
    for (const item of items) {
        const tr=document.createElement('tr');
        for (const key in item) {
            const td=document.createElement('td');
            const contTd=document.createTextNode(item[key]);

            td.appendChild(contTd);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);        
    }

    return tbody;
}

function manejadorExtra(){
    alert("Manejador añadido.");
}
