const boton=document.getElementById('btnPersonas');

boton.addEventListener('click',getPersonas);

function getPersonas(){
    const xhr=new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState==4 && xhr.status==200){
            let arrayPersonas=JSON.parse(xhr.responseText);
            console.info(arrayPersonas);
        }
    });

    xhr.open("GET","personas.json");
    xhr.send();
}