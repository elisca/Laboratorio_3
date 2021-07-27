const boton=document.getElementById('btnMarcas');

boton.addEventListener('click',getMarcas);

function getMarcas(){
    const xhr=new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4){
            if(xhr.status==200){
                let data=JSON.parse(xhr.responseText);
                console.log(data);
            }
        }
    });

    xhr.open("GET","./js/marcas.json");
    xhr.send();
}