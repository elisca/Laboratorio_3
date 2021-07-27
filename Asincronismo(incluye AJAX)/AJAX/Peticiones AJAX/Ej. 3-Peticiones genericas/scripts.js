//Los IDs deben setearse automaticamente en POST

//Varios
const divInfo=document.getElementById('divInfo');
const txtId=document.getElementById('txtId');
const txtNombre=document.getElementById('txtNombre');
const txtApellido=document.getElementById('txtApellido');
const txtEmail=document.getElementById('txtEmail');
const lstPeticion=document.getElementById('lstPeticion');
const lstHerramienta=document.getElementById('lstHerramienta');
const btnEnviar=document.getElementById('btnEnviar');

// Peticiones
const URL_DATA="http://localhost:3000/personas/";

btnEnviar.addEventListener('click',(e)=>{
    let auxDatos={
        "id":parseInt(txtId.value),
        "first_name":txtNombre.value,
        "last_name":txtApellido.value,
        "email":txtEmail.value
    };

    switch(lstHerramienta.value){
        case "XHR":
            peticionXHR(auxDatos,lstPeticion.value,URL_DATA);
            break;
        case "FETCH":
            peticionFetch(auxDatos,lstPeticion.value,URL_DATA);
            break;
        case "ASYNC-FETCH":
            peticionAsyncFetch(auxDatos,lstPeticion.value,URL_DATA);
            break;
        case "AXIOS":
            peticionAxios(auxDatos,lstPeticion.value,URL_DATA);
            break;
        case "ASYNC-AXIOS":
            peticionAsyncAxios(auxDatos,lstPeticion.value,URL_DATA);
            break;
        default:
            break;                                                    
    }
});

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

function validarPeticion(peticion){
    peticion=peticion.toUpperCase();
    return (peticion=="GET" || peticion=="POST" || peticion=="PUT" || peticion=="DELETE");
}

// Punto 0.1-XHR Genérico
function peticionXHR(datos,peticion,ruta){
    if(datos!=null && validarPeticion && ruta!=null){
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

        if(peticion=="PUT" || peticion=="DELETE"){
            //Abrir petición
            xhr.open(peticion,ruta+datos.id);
        }
        else{
            xhr.open(peticion,ruta);
        }
        
        if(peticion=="POST" || peticion=="PUT"){
            //Configuramos encabezado(se debe abrir la petición primero)
            xhr.setRequestHeader("Content-Type","application/json;charset=utf-8");
            xhr.send(JSON.stringify(datos));    
        }
        else{
            xhr.send();    
        }        
    }
    else{
        console.error("Datos de entrada incorrectos.");
    }
}
    
// Punto 0.2-Fetch Genérico
function peticionFetch(datos,peticion,ruta){
    generarSpinner();

    if(datos!=null && validarPeticion && ruta!=null){
        let options;
        if(peticion=="POST" || peticion=="PUT"){
            options={
                method: peticion,
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(datos)
            };
        }
        else{
            options={
                method: peticion
            };
        }
    
        if(peticion=="PUT" || peticion=="DELETE")
            ruta=ruta+datos.id;

        fetch(ruta,options)
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
    else{
        console.error("Datos de entrada incorrectos.");
    }
}

// Punto 0.3-Async Fetch Genérico
async function peticionAsyncFetch(datos,peticion,ruta){
    if(datos!=null && validarPeticion && ruta!=null){
        let data;
        let options;
        let res;

        try {
            generarSpinner();

            if(peticion=="POST" || peticion=="PUT"){
                options={
                    method: peticion,
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(datos)
                };
            }
            else if(peticion=="DELETE"){
                options={
                    method: peticion,
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    }
                };
            }
            else{
                options={
                    method: peticion
                }
            }
        
            if(peticion=="PUT" || peticion=="DELETE")                                
                ruta=ruta+datos.id;

            //Como await espera una respuesta, no hace falta resolver la promesa de fetch
            res=await fetch(ruta,options);
            if(!res.ok)
                throw {error:res.status,statusText:res.statusText};

            //Await espera respuesta, no es necesario resolver promesa de json
            data=await res.json();
            console.info(data);
        } catch (error) {
            console.error(error);
        }
        finally{
            borrarSpinner();
        };
    }
    else{
        console.error("Datos de entrada incorrectos.");
    }
}

// Punto 0.4-Axios Genérico
function peticionAxios(datos,peticion,ruta){
    if(datos!=null && validarPeticion && ruta!=null){
        generarSpinner();

        switch(peticion){
            case "GET":
                axios.get(ruta)
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
                break;
            case "POST":
                axios.post(ruta,datos)
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
                break;
            case "PUT":
                axios.put(ruta+datos.id,datos)
                    .then((res)=>{
                        console.info(res.data);
                    })
                    .catch((err)=>{
                        let msjError=err.response;
                        console.error(`${msjError.status}:${msjError.statusText}`);
                    })
                    .finally(()=>{
                        borrarSpinner();
                    });
                break;
            case "DELETE":
                axios.delete(ruta+datos.id)
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
                break;
        }
    }
    else{
        console.error("Datos de entrada incorrectos.");
    }
}

// Punto 0.5-Async Axios Genérico
async function peticionAsyncAxios(datos,peticion,ruta){
    if(datos!=null && validarPeticion && ruta!=null){
        switch(peticion){
            case "GET":
                try {
                    generarSpinner();
                    let data=await axios.get(ruta);
                    data=data.data;
                    console.info(data);
                } catch (error) {
                    let msjError=error.response;
                    console.error(`${msjError.status}:${msjError.statusText}`);
                }
                finally{
                    borrarSpinner();
                }
                break;
            case "POST":
                try {
                    generarSpinner();
            
                    let data=await axios.post(ruta,datos);
                    data=data.data;
            
                    sendPostRequest();
                    console.info(data);
                } catch (error) {
                    let msjError=error.response;
                    console.error(`${msjError.status}:${msjError.statusText}`);
                }
                finally{
                    borrarSpinner();
                }
                break;
            case "PUT":
                try {
                    generarSpinner();
            
                    let data=await axios.put(ruta+datos.id,datos);
                    data=data.data;
            
                    sendPostRequest();
                    console.info(data);
                } catch (error) {
                    let msjError=error.response;
                    console.error(`${msjError.status}:${msjError.statusText}`);
                }
                finally{
                    borrarSpinner();
                }
                break;                
            case "DELETE":
                try {
                    generarSpinner();
            
                    let data=await axios.delete(ruta+datos.id);
                    data=data.data;
            
                    sendDeleteRequest();
                    console.info(data);
                } catch (error) {
                    let msjError=error.response;
                    console.error(`${msjError.status}:${msjError.statusText}`);
                }
                finally{
                    borrarSpinner();
                }
                break;                       
        }
    }
    else{
        console.error("Datos de entrada incorrectos.");
    }
}
