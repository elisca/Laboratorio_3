//Peticiones POST y DELETE refrescan la página, evitarlo.
//Los IDs deben setearse automaticamente en POST
//Ver putAsyncAxiosPersonas no funciona (https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios)
const divInfo=document.getElementById('divInfo');

const botonXHR=document.getElementById('btnXHRPersonas');
const botonFetch=document.getElementById('btnFetchPersonas');
const botonAsync=document.getElementById('btnAsyncPersonas');
const botonAxios=document.getElementById('btnAxiosPersonas');
const botonAsyncAxios=document.getElementById('btnAsyncAxiosPersonas');
const botonPostXHR=document.getElementById('btnPostXHRPersonas');
const botonDeleteXHR=document.getElementById('btnDeleteXHRPersonas');
const botonPutXHR=document.getElementById('btnPutXHRPersonas');
const botonPostFetch=document.getElementById('btnPostFetchPersonas');
const botonPostAsyncFetch=document.getElementById('btnPostAsyncPersonas');
const botonDeleteFetch=document.getElementById('btnDeleteFetchPersonas');
const botonDeleteAsync=document.getElementById('btnDeleteAsyncPersonas');
const botonPutFetch=document.getElementById('btnPutFetchPersonas');
const botonPutAsync=document.getElementById('btnPutAsyncPersonas');
const botonPostAsyncAxios=document.getElementById('btnPostAsyncAxiosPersonas');
const botonPutAsyncAxios=document.getElementById('btnPutAsyncAxiosPersonas');
const botonDeleteAsyncAxios=document.getElementById('btnDeleteAsyncAxiosPersonas');
const botonPostAxios=document.getElementById('btnPostAxiosPersonas');
const botonPutAxios=document.getElementById('btnPutAxiosPersonas');
const botonDeleteAxios=document.getElementById('btnDeleteAxiosPersonas');

//Configuracion genérica para peticiones
const id=6;
const URL_DATA="http://localhost:3000/personas/";
// const URL_DATA="http://localhost:3000/personas/@";

botonXHR.addEventListener('click',getXHRPersonas);
botonFetch.addEventListener('click',getFetchPersonas);
botonAsync.addEventListener('click',getAsyncPersonas);
botonAxios.addEventListener('click',getAxiosPersonas);
botonAsyncAxios.addEventListener('click',getAsyncAxiosPersonas);
botonPostXHR.addEventListener('click',postXHRPersonas);
botonDeleteXHR.addEventListener('click',deleteXHRPersonas);
botonPutXHR.addEventListener('click',putXHRPersonas);
botonPostFetch.addEventListener('click',postFetchPersonas);
botonPostAsyncFetch.addEventListener('click',postAsyncPersonas);
botonDeleteFetch.addEventListener('click',deleteFetchPersonas);
botonDeleteAsync.addEventListener('click',deleteAsyncPersonas);
botonPutFetch.addEventListener('click',putFetchPersonas);
botonPutAsync.addEventListener('click',putAsyncPersonas);
botonPostAsyncAxios.addEventListener('click',postAsyncAxiosPersonas);
botonPutAsyncAxios.addEventListener('click',putAsyncAxiosPersonas);
botonDeleteAsyncAxios.addEventListener('click',deleteAsyncAxiosPersonas);
botonPostAxios.addEventListener('click',postAxiosPersonas);
botonPutAxios.addEventListener('click',putAxiosPersonas);
botonDeleteAxios.addEventListener('click',deleteAxiosPersonas);

//Generar spinner
function generarSpinner(){
    borrarSpinner();

    const spinner=document.createElement('img');
    spinner.setAttribute('src','./assets/img/preloader.gif');

    divInfo.appendChild(spinner);
}

function borrarSpinner(){
    divInfo.innerHTML="";
}

// Punto 1-Get XHR
function getXHRPersonas(){
    let xhr=new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            borrarSpinner();
            if(xhr.status>=200 && xhr.status<=299){                
                let data=JSON.parse(xhr.responseText);
                console.info(data);
            }
            else{
                console.error(`ERROR ${xhr.status}:${xhr.statusText}`);
            }
        }
        else{
            generarSpinner();
        }
    });

    xhr.open("GET",URL_DATA);
    xhr.send();    
}

// Punto 2-Get Fetch
function getFetchPersonas(){
    generarSpinner();
    fetch(URL_DATA)
        .then((res)=>{
            return res.ok?res.json():Promise.reject(res)})
        .then((data)=>{                    
            console.info(data);
        })
        .catch((rej)=>{
            console.error(`ERROR ${rej.status}:${rej.statusText}`);
        })
        .finally(()=>{
            borrarSpinner();
        });
}

// Punto 3-Get Async Fetch
async function getAsyncPersonas(){
    let data;

    try {
        generarSpinner();
        //Como await espera una respuesta, no hace falta resolver la promesa de fetch
        const res=await fetch(URL_DATA);

        if(!res.ok)
            throw {error:res.status,statusText:res.statusText};

        //Await espera respuesta, no escesario resolver promesa de json
        data=await res.json();
        console.info(data);
    } catch (error) {
        console.error(error);
    }
    finally{
        borrarSpinner();
    };
}

// Punto 4-Get Axios
function getAxiosPersonas(){
    generarSpinner();
    axios.get(URL_DATA)
        .then((res)=>{
            console.info(res.data);
        })
        .catch((err)=>{
            let msjError=error.response;
            console.error(`${msjError.status}:${msjError.statusText}`);
        })
        .finally(()=>{
            borrarSpinner();
        });
}

// Punto 5-Get Async Axios
async function getAsyncAxiosPersonas(){
    try {
        generarSpinner();
        let datos=await axios.get(URL_DATA);
        datos=datos.data;
        console.info(datos);
    } catch (error) {
        let msjError=error.response;
        console.error(`${msjError.status}:${msjError.statusText}`);
    }
    finally{
        borrarSpinner();
    }
}

// Punto 6-Post XHR
function postXHRPersonas(){
    let xhr=new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            borrarSpinner();
            if(xhr.status>=200 && xhr.status<=299){                
                let data=JSON.parse(xhr.responseText);
                console.info(data);
            }
            else{
                console.error(`ERROR ${xhr.status}:${xhr.statusText}`);
            }
        }
        else{
            generarSpinner();
        }
    });

    //Creamos un nuevo elemento sin id(se asigna automáticamente)
    let auxPersona={
        "id":-1,
        "first_name":"Olav",
        "last_name":"Cattel",
        "email":"ocattel0@ezinearticles.com"};    
    
    //Abrir petición
    xhr.open("POST",URL_DATA);

    //Configuramos encabezado(se debe abrir la petición primero)
    xhr.setRequestHeader("Content-Type","application/json;charset=utf-8");

    xhr.send(JSON.stringify(auxPersona));    
}

// Punto 7-Delete XHR
function deleteXHRPersonas(){//Toma el id para eliminarlo(en este caso una constante global)    
    let xhr=new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            borrarSpinner();
            if(xhr.status>=200 && xhr.status<=299){                
                let data=JSON.parse(xhr.responseText);
                console.info(data);
            }
            else{
                console.error(`ERROR ${xhr.status}:${xhr.statusText}`);
            }
        }
        else{
            generarSpinner();
        }
    });
    
    xhr.open("DELETE",`${URL_DATA}${id}`);
    xhr.send();    
}

// Punto 8-Put XHR
function putXHRPersonas(){
    let xhr=new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            borrarSpinner();
            if(xhr.status>=200 && xhr.status<=299){                
                let data=JSON.parse(xhr.responseText);
                console.info(data);
            }
            else{
                console.error(`ERROR ${xhr.status}:${xhr.statusText}`);
            }
        }
        else{
            generarSpinner();
        }
    });

    //Creamos un nuevo elemento con id(se modifica el existente por este)
    let auxPersona={
        "id":id,
        "first_name":"Nombre",
        "last_name":"Apellido",
        "email":"Email@ezinearticles.com"};    
    
    //Abrir petición
    xhr.open("PUT",`${URL_DATA}${id}`);//Se pasa id a modificar

    //Configuramos encabezado(se debe abrir la petición primero)
    xhr.setRequestHeader("Content-Type","application/json;charset=utf-8");

    xhr.send(JSON.stringify(auxPersona));    
}

// Punto 9-Post Fetch
function postFetchPersonas(){
    generarSpinner();

    //Creamos un nuevo elemento sin id(se asigna automáticamente)
    let auxPersona={
        "id":-1,
        "first_name":"Olav",
        "last_name":"Cattel",
        "email":"ocattel0@ezinearticles.com"};    

    const options={
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(auxPersona)
    };

    fetch(URL_DATA,options)
        .then((res)=>{
            return res.ok?res.json():Promise.reject(res)})
        .then((data)=>{                    
            console.info(data);
        })
        .catch((rej)=>{
            console.error(`ERROR ${rej.status}:${rej.statusText}`);
        })
        .finally(()=>{
            borrarSpinner();
        });
}

// Punto 10-Post Async Fetch
async function postAsyncPersonas(){
    generarSpinner();

    //Creamos un nuevo elemento sin id(se asigna automáticamente)
    let auxPersona={
        "id":-1,
        "first_name":"Olav",
        "last_name":"Cattel",
        "email":"ocattel0@ezinearticles.com"};    

    const options={
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(auxPersona)
    };

    let data;

    try {
        generarSpinner();
        //Como await espera una respuesta, no hace falta resolver la promesa de fetch
        const res=await fetch(URL_DATA,options);

        if(!res.ok)
            throw {error:res.status,statusText:res.statusText};

        //Await espera respuesta, no escesario resolver promesa de json
        data=await res.json();
        console.info(data);
    } catch (error) {
        console.error(error);
    }
    finally{
        borrarSpinner();
    };
}

// Punto 11-Delete Fetch
function deleteFetchPersonas(){
    generarSpinner();

    const options={
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        }
    };

    fetch(URL_DATA+id,options)
        .then((res)=>{
            return res.ok?res.json():Promise.reject(res)})
        .then((data)=>{                    
            console.info(data);
        })
        .catch((rej)=>{
            console.error(`ERROR ${rej.status}:${rej.statusText}`);
        })
        .finally(()=>{
            borrarSpinner();
        });
}

// Punto 12-Delete Async Fetch
async function deleteAsyncPersonas(){
    generarSpinner();

    const options={
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        }
    };

    let data;

    try {
        generarSpinner();
        //Como await espera una respuesta, no hace falta resolver la promesa de fetch
        const res=await fetch(URL_DATA+id,options);

        if(!res.ok)
            throw {error:res.status,statusText:res.statusText};

        //Await espera respuesta, no escesario resolver promesa de json
        data=await res.json();
        console.info(data);
    } catch (error) {
        console.error(error);
    }
    finally{
        borrarSpinner();
    };
}

// Punto 13-Put Fetch
function putFetchPersonas(){
    generarSpinner();

    //Creamos un nuevo elemento sin id(se asigna automáticamente)
    let auxPersona={
        "id":id,
        "first_name":"Nombre",
        "last_name":"Apellido",
        "email":"Email@ezinearticles.com"};    

    const options={
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(auxPersona)
    };

    fetch(URL_DATA+id,options)
        .then((res)=>{
            return res.ok?res.json():Promise.reject(res)})
        .then((data)=>{                    
            console.info(data);
        })
        .catch((rej)=>{
            console.error(`ERROR ${rej.status}:${rej.statusText}`);
        })
        .finally(()=>{
            borrarSpinner();
        });
}

// Punto 14-Put Async Fetch
async function putAsyncPersonas(){
    generarSpinner();

    //Creamos un nuevo elemento sin id(se asigna automáticamente)
    let auxPersona={
        "id":id,
        "first_name":"Nombre",
        "last_name":"Apellido",
        "email":"Email@ezinearticles.com"};    

    const options={
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(auxPersona)
    };

    let data;

    try {
        generarSpinner();
        //Como await espera una respuesta, no hace falta resolver la promesa de fetch
        const res=await fetch(URL_DATA+id,options);

        if(!res.ok)
            throw {error:res.status,statusText:res.statusText};

        //Await espera respuesta, no escesario resolver promesa de json
        data=await res.json();
        console.info(data);
    } catch (error) {
        console.error(error);
    }
    finally{
        borrarSpinner();
    };
}

// Punto 5-Post Async Axios
async function postAsyncAxiosPersonas(){    
    try {
        generarSpinner();

        //Creamos un nuevo elemento sin id(se asigna automáticamente)
        let auxPersona={
            "id":id,
            "first_name":"Nombre",
            "last_name":"Apellido",
            "email":"Email@ezinearticles.com"};    

        let datos=await axios.post(URL_DATA,auxPersona);
        datos=datos.data;

        sendPostRequest();
        console.info(datos);
    } catch (error) {
        let msjError=error.response;
        console.error(`${msjError.status}:${msjError.statusText}`);
    }
    finally{
        borrarSpinner();
    }
}

// Punto 5-Put Async Axios
async function putAsyncAxiosPersonas(){    
    try {
        generarSpinner();

        //Creamos un nuevo elemento sin id(se asigna automáticamente)
        let auxPersona={
            "id":id,
            "first_name":"Nombre",
            "last_name":"Apellido",
            "email":"Email@ezinearticles.com"};    

        let datos=await axios.put(URL_DATA,auxPersona);
        datos=datos.data;

        sendPutRequest();
        console.info(datos);
    } catch (error) {
        let msjError=error.response;
        console.error(`${msjError.status}:${msjError.statusText}`);
    }
    finally{
        borrarSpinner();
    }
}

// Punto 5-Delete Async Axios
async function deleteAsyncAxiosPersonas(){    
    try {
        generarSpinner();

        let datos=await axios.delete(URL_DATA+id);
        datos=datos.data;

        sendDeleteRequest();
        console.info(datos);
    } catch (error) {
        let msjError=error.response;
        console.error(`${msjError.status}:${msjError.statusText}`);
    }
    finally{
        borrarSpinner();
    }
}

// Punto 4-Post Axios
function postAxiosPersonas(){
    generarSpinner();

    //Creamos un nuevo elemento sin id(se asigna automáticamente)
    let auxPersona={
        "id":id,
        "first_name":"Nombre",
        "last_name":"Apellido",
        "email":"Email@ezinearticles.com"};    

    axios.post(URL_DATA,auxPersona)
        .then((res)=>{
            console.info(res.data);
        })
        .catch((err)=>{
            let msjError=error.response;
            console.error(`${msjError.status}:${msjError.statusText}`);
        })
        .finally(()=>{
            borrarSpinner();
        });
}

// Punto 4-Put Axios
function putAxiosPersonas(){
    generarSpinner();

    //Creamos un nuevo elemento sin id(se asigna automáticamente)
    let auxPersona={
        "id":id,
        "first_name":"Nombre",
        "last_name":"Apellido",
        "email":"Email@ezinearticles.com"};    

    axios.put(URL_DATA,auxPersona)
        .then((res)=>{
            console.info(res.data);
        })
        .catch((err)=>{
            let msjError=error.response;
            console.error(`${msjError.status}:${msjError.statusText}`);
        })
        .finally(()=>{
            borrarSpinner();
        });
}

// Punto 4-Delete Axios
function deleteAxiosPersonas(){
    generarSpinner();

    //Creamos un nuevo elemento sin id(se asigna automáticamente)
    let auxPersona={
        "id":id,
        "first_name":"Nombre",
        "last_name":"Apellido",
        "email":"Email@ezinearticles.com"};    

    axios.delete(URL_DATA+id)
        .then((res)=>{
            console.info(res.data);
        })
        .catch((err)=>{
            let msjError=error.response;
            console.error(`${msjError.status}:${msjError.statusText}`);
        })
        .finally(()=>{
            borrarSpinner();
        });
}