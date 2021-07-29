//postFetchCocineros incluir spinner

const divSpinner=document.getElementById('spinner');

//Array para manejo de datos de entrada y salida
let data=[];

//Dirección a pegar en el servidor
const URL_DATA="http://localhost:3000/cocineros/";

function crearSpinner(){
    const objSpinner=document.createElement('img');
    
    objSpinner.setAttribute('src','./assets/spinner-cargando.gif');
    return objSpinner;
}

function getXhrCocineros(){//Se puede recibir options y desestructurarlo
    //Desestructuración de options
    //const {url,method,success,error,final}=options;

    //Instancia de objeto XHR
    const xhr=new XMLHttpRequest();

    //Manejador para peticiones
    xhr.onreadystatechange = ()=>{
        //Petición lista
        if(xhr.readyState==4){
            //Elimina spinner
            divSpinner.innerHTML="";

            //Petición resuelta satisfactoriamente
            if(xhr.status>=200 && xhr.status<=299){
                data=JSON.parse(xhr.responseText);
                console.info(data);
            }
            //Petición resuelta con error
            else{
                console.error(`Error:${xhr.status}-${xhr.statusText}`);
            }
        }
        //Petición en proceso
        else{
            //Spinner
            divSpinner.appendChild(crearSpinner());
        }
    }

    //Abrir petición(método,URL,asíncrona-true por defecto y es opcional)
    xhr.open("GET",URL_DATA,true);
    //xhr.open("GET","http://jsonplaceholder.typicode.com/users",true);
    
    //Enviar petición
    xhr.send();
}

function postXhrCocinero(){
    //Instancia de objeto XHR
    const xhr=new XMLHttpRequest();

    //Manejador para peticiones
    xhr.onreadystatechange = ()=>{
        //Petición lista
        if(xhr.readyState==4){
            //Elimina spinner
            divSpinner.innerHTML="";

            //Petición resuelta satisfactoriamente
            if(xhr.status>=200 && xhr.status<=299){
                data=JSON.parse(xhr.responseText);
                console.info(data);
            }
            //Petición resuelta con error
            else{
                console.error(`Error:${xhr.status}-${xhr.statusText}`);
            }
        }
        //Petición en proceso
        else{
            //Spinner
            divSpinner.appendChild(crearSpinner());
        }
    }

    //Crear objeto a enviar(sin id)
    let nuevoCocinero={
        "nombre":"Ezequiel",
        "especialidad":"Rebozados"
    }

    //Abrir petición(método,URL,asíncrona-true por defecto y es opcional)
    xhr.open("POST",URL_DATA,true);
    
    //Setear encabezado
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");

    //Enviar petición con objeto(se envía por body)
    xhr.send(JSON.stringify(nuevoCocinero));
}

function putXhrCocinero(){
    //ID a modificar
    let id=4;

    //Instancia de objeto XHR
    const xhr=new XMLHttpRequest();

    //Manejador para peticiones
    xhr.onreadystatechange = ()=>{
        //Petición lista
        if(xhr.readyState==4){
            //Elimina spinner
            divSpinner.innerHTML="";

            //Petición resuelta satisfactoriamente
            if(xhr.status>=200 && xhr.status<=299){
                data=JSON.parse(xhr.responseText);
                console.info(data);
            }
            //Petición resuelta con error
            else{
                console.error(`Error:${xhr.status}-${xhr.statusText}`);
            }
        }
        //Petición en proceso
        else{
            //Spinner
            divSpinner.appendChild(crearSpinner());
        }
    }

    //Crear objeto a enviar(sin id)
    let actualizarCocinero={
        "nombre":"Ezequiel-Modificado",
        "especialidad":"Rebozados-Modificado"
    }

    //Abrir petición(método,URL,asíncrona-true por defecto y es opcional)
    xhr.open("PUT",`${URL_DATA}${id}`,true);
    
    //Setear encabezado
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");

    //Enviar petición con objeto(se envía por body)
    xhr.send(JSON.stringify(actualizarCocinero));
}

function deleteXhrCocinero(){
    //ID a eliminar
    let id=5;

    //Instancia de objeto XHR
    const xhr=new XMLHttpRequest();

    //Manejador para peticiones
    xhr.onreadystatechange = ()=>{
        //Petición lista
        if(xhr.readyState==4){
            //Elimina spinner
            divSpinner.innerHTML="";

            //Petición resuelta satisfactoriamente
            if(xhr.status>=200 && xhr.status<=299){
                data=JSON.parse(xhr.responseText);
                console.info(data);
            }
            //Petición resuelta con error
            else{
                console.error(`Error:${xhr.status}-${xhr.statusText}`);
            }
        }
        //Petición en proceso
        else{
            //Spinner
            divSpinner.appendChild(crearSpinner());
        }
    }

    //Abrir petición(método,URL,asíncrona-true por defecto y es opcional)
    xhr.open("DELETE",`${URL_DATA}${id}`,true);

    //Enviar petición con objeto(se envía por body)
    xhr.send();
}

function getFetchCocineros(){
    divSpinner.appendChild(crearSpinner());

    fetch(URL_DATA)
        .then((res)=>{
            return res.ok? res.json():Promise.reject(res);
        })//Retorno de promesa Fetch
        .then((data)=>console.info(data))//Retorno de promesa de res.json() y conversión de datos
        .catch((error)=>console.error(`Error: ${error.status}-${error.statusText}`))//Manejo de excepción
        .finally(()=>{
            console.log("Proceso terminado.");
            divSpinner.innerHTML="";
        });//Avisamos final del proceso
}

function postFetchCocineros(){
    divSpinner.appendChild(crearSpinner());

    let nuevoCocinero={
        nombre: "Candela",
        especialidad: "Milanesa"
    };

    const options={
        method: "POST",
        headers: {
            "Content-Type":"application/json;charset=utf-8"
        },
        body: JSON.stringify(nuevoCocinero)
    };

    fetch(URL_DATA,options)
        .then((res)=>{
            return res.ok? res.json():Promise.reject(res);
        })//Retorno de promesa Fetch
        .then((data)=>console.info(data))//Retorno de promesa de res.json() y conversión de datos
        .catch((error)=>console.error(`Error: ${error.status}-${error.statusText}`))//Manejo de excepción
        .finally(()=>{
            console.log("Proceso terminado.");
            divSpinner.innerHTML="";
        });//Avisamos final del proceso
}

function putFetchCocineros(){
    divSpinner.appendChild(crearSpinner());

    let actualizarCocinero={
        id: 4,
        nombre: "Candela-Modificado",
        especialidad: "Milanesa-Modificado"
    };

    const options={
        method: "PUT",
        headers: {
            "Content-Type":"application/json;charset=utf-8"
        },
        body: JSON.stringify(actualizarCocinero)
    };

    fetch(`${URL_DATA}${actualizarCocinero.id}`,options)
        .then((res)=>{
            return res.ok? res.json():Promise.reject(res);
        })//Retorno de promesa Fetch
        .then((data)=>console.info(data))//Retorno de promesa de res.json() y conversión de datos
        .catch((error)=>console.error(`Error: ${error.status}-${error.statusText}`))//Manejo de excepción
        .finally(()=>{
            console.log("Proceso terminado.");
            divSpinner.innerHTML="";
    });//Avisamos final del proceso
}

function deleteFetchCocineros(){
    divSpinner.appendChild(crearSpinner());

    //ID a eliminar
    let id=5;

    const options={
        method: "DELETE"
    };

    fetch(`${URL_DATA}${id}`,options)
        .then((res)=>{
            return res.ok? res.json():Promise.reject(res);
        })//Retorno de promesa Fetch
        .then((data)=>console.info(data))//Retorno de promesa de res.json() y conversión de datos
        .catch((error)=>console.error(`Error: ${error.status}-${error.statusText}`))//Manejo de excepción
        .finally(()=>{
            console.log("Proceso terminado.");
            divSpinner.innerHTML="";
    });//Avisamos final del proceso
}

async function getAsyncFetchCocineros(){
    try {
        divSpinner.appendChild(crearSpinner());

        const res=await fetch(URL_DATA);//Al usar await no hace falta resolver la promesa

        //En caso de que la promesa sea rechazada
        if(!res.ok){
            throw {error: res.status, statusText: res.statusText};
        }
        //En caso de que la promesa sea resuelta
        else{
            let data=await res.json();//La respuesta es una promesa, debe convertirse
            console.info(data);//Mostramos los datos de la respuesta
        }
    //En caso de error en la petición
    } catch (error) {
        console.error(error);//Notificamos error
    }
    divSpinner.innerHTML="";
}

async function postAsyncFetchCocineros(){
    try {
        divSpinner.appendChild(crearSpinner());

        let nuevoCocinero={
            nombre: "Camila",
            especialidad: "Tartas"
        };

        const options={
            method: "POST",
            headers: {
                "Content-Type":"application/json;charset=utf-8"
            },
            body: JSON.stringify(nuevoCocinero)
        };
    
        const res=await fetch(URL_DATA,options);//Al usar await no hace falta resolver la promesa

        //En caso de que la promesa sea rechazada
        if(!res.ok){
            throw {error: res.status, statusText: res.statusText};
        }
        //En caso de que la promesa sea resuelta
        else{
            let data=await res.json();//La respuesta es una promesa, debe convertirse
            console.info(data);//Mostramos los datos de la respuesta
        }
    //En caso de error en la petición
    } catch (error) {
        console.error(error);//Notificamos error
    }

    divSpinner.innerHTML="";
}

async function putAsyncFetchCocineros(){
    try {
        divSpinner.appendChild(crearSpinner());

        let actualizarCocinero={
            id: 3,
            nombre: "Camila-Modificado",
            especialidad: "Tartas-Modificado"
        };

        const options={
            method: "PUT",
            headers: {
                "Content-Type":"application/json;charset=utf-8"
            },
            body: JSON.stringify(actualizarCocinero)
        };
    
        const res=await fetch(`${URL_DATA}${actualizarCocinero.id}`,options);//Al usar await no hace falta resolver la promesa

        //En caso de que la promesa sea rechazada
        if(!res.ok){
            throw {error: res.status, statusText: res.statusText};
        }
        //En caso de que la promesa sea resuelta
        else{
            let data=await res.json();//La respuesta es una promesa, debe convertirse
            console.info(data);//Mostramos los datos de la respuesta
        }
    //En caso de error en la petición
    } catch (error) {
        console.error(error);//Notificamos error
    }
    
    divSpinner.innerHTML="";
}

async function deleteAsyncFetchCocineros(){
    try {
        divSpinner.appendChild(crearSpinner());

        let id = 3;

        const options={
            method: "DELETE"
        };
    
        const res=await fetch(`${URL_DATA}${id}`,options);//Al usar await no hace falta resolver la promesa

        //En caso de que la promesa sea rechazada
        if(!res.ok){
            throw {error: res.status, statusText: res.statusText};
        }
        //En caso de que la promesa sea resuelta
        else{
            let data=await res.json();//La respuesta es una promesa, debe convertirse
            console.info(data);//Mostramos los datos de la respuesta
        }
    //En caso de error en la petición
    } catch (error) {
        console.error(error);//Notificamos error
    }

    divSpinner.innerHTML="";
}

function getAxiosCocineros(){
    divSpinner.appendChild(crearSpinner());

    axios.get(URL_DATA)//Resolvemos respuesta con promesa
        .then((res)=>{
            console.info(res.data);
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("Proceso terminado.");
            divSpinner.innerHTML="";
        });//Avisamos final del proceso
}

function postAxiosCocineros(){
    divSpinner.appendChild(crearSpinner());

    const nuevoCocinero={
        nombre: "Georgina",
        especialidad: "Sopa"
    };

    axios.post(URL_DATA,nuevoCocinero)//Resolvemos respuesta con promesa
        .then((res)=>{
            console.info(res.data);
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("Proceso terminado.");
            divSpinner.innerHTML="";
        });//Avisamos final del proceso
}

function putAxiosCocineros(){
    divSpinner.appendChild(crearSpinner());

    const nuevoCocinero={
        id: 6,
        nombre: "Georgina-Modificado",
        especialidad: "Sopa-Modificado"
    };

    axios.put(`${URL_DATA}${nuevoCocinero.id}`,nuevoCocinero)//Resolvemos respuesta con promesa
        .then((res)=>{
            console.info(res.data);
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("Proceso terminado.");
            divSpinner.innerHTML="";
        });//Avisamos final del proceso
}

function deleteAxiosCocineros(){
    divSpinner.appendChild(crearSpinner());

    let id=6;

    axios.delete(`${URL_DATA}${id}`)//Resolvemos respuesta con promesa
        .then((res)=>{
            console.info(res.data);
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("Proceso terminado.");
            divSpinner.innerHTML="";
        });//Avisamos final del proceso
}

async function getAsyncAxiosCocineros(){
    try {        
        divSpinner.appendChild(crearSpinner());

        let data=await axios.get(URL_DATA);//Resolvemos respuesta con promesa
        console.info(data.data);
    } catch (error) {      
        console.error(error.response);  
    }

    divSpinner.innerHTML="";
}

async function postAsyncAxiosCocineros(){
    try {        
        divSpinner.appendChild(crearSpinner());

        const nuevoCocinero={
            nombre: "Carlos",
            especialidad: "Pescados"
        }

        let data=await axios.post(URL_DATA,nuevoCocinero);//Resolvemos respuesta con promesa
        console.info(data.data);
    } catch (error) {      
        console.error(error.response);  
    }

    divSpinner.innerHTML="";
}

async function putAsyncAxiosCocineros(){
    try {        
        divSpinner.appendChild(crearSpinner());

        const nuevoCocinero={
            id: 7,
            nombre: "Carlos-Modificado",
            especialidad: "Pescados-Modificado"
        }

        let data=await axios.put(`${URL_DATA}${nuevoCocinero.id}`,nuevoCocinero);//Resolvemos respuesta con promesa
        console.info(data.data);
    } catch (error) {      
        console.error(error.response);  
    }

    divSpinner.innerHTML="";
}

async function deleteAsyncAxiosCocineros(){
    try {        
        divSpinner.appendChild(crearSpinner());

        let id=7;

        let data=await axios.delete(`${URL_DATA}${id}`);//Resolvemos respuesta con promesa
        console.info(data.data);
    } catch (error) {      
        console.error(error.response);  
    }

    divSpinner.innerHTML="";
}
