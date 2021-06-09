const boton=document.getElementById("btnMarcas");

boton.addEventListener("click",getMarcas);

function getMarcas(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4){//En caso de peticion lista
            if(xhr.status==200){//Respuesta exitosa
                let data=JSON.parse(xhr.responseText);//"responseText" es el dato de respuesta del servidor
                console.info(data);
            }
        }
    };

    xhr.open("GET","marcas.json");//Se abre una peticion con metodo y URL
    xhr.send();//Envio de peticion

    //Todas las peticiones traen un "ready state":
    // 0-no enviado
    // 1-abierto
    // 2-encabezado recibido
    // 3-cargando
    // 4-hecho
}