const idH1=document.getElementById('idH1');

let texto="hola";
idH1.setAttribute("data-"+texto,"Hola");

alert(idH1.dataset.hola);