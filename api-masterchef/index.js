// Falta codigo despues del recreo completar

/*
// Trae solo las funciones exportadas
const Math=require('./Math.js');
// Solo trae una de las funciones exportadas
const {sumar}=require('./Math.js');

console.log(Math.sumar(30,20));
*/

const PORT=3000;

// No es necesario especificar ruta
const express=require('express');
const cors=require("cors");

// Crea y ejecuta un servidor Node
const app=express();

// Middlewares para usar CORS y otro
app.use(cors());
app.use(express.json());

// Peticion y respuesta del servidor
// Pedir con localhost:puerto
app.get('/',(req,res)=>{
    res.send("<h1>Hola mundo</h1>");
});

//Puerto a monitorear
app.listen(PORT,()=>{
    console.log("Servidor escuchando en el puerto " + PORT);
});

let nextId=6;
const cocineros=[
    {
      id: 1,
      nombre: "Donato",
      especialidad: "Pastas"
    },
    {
      id: 2,
      nombre: "German",
      especialidad: "Verduras"
    },
    {
      id: 3,
      nombre: "Damian",
      especialidad: "Postres"
    }
  ];

app.get('/',(req,res)=>{
    res.send("<h1>API Masterchef</h1>");
});
app.get('/api/cocineros',(req,res)=>{
    res.json(cocineros);
});
app.post('/api/cocineros',(req,res)=>{
    const body=req.body;
    if(body.nombre && body.especialidad){
        const nuevoCocinero={
            id: nextId++,
            nombre: body.nombre,
            especialidad: body.especialidad
        };
        cocineros.push(nuevoCocinero);
        res.json(nuevoCocinero);
    }
    else{
        res.status(400).send({message: "Bad request"});
    }
});

app.get("/api/cocineros/:id",(req,res)=>{
    let id=Number(req.params.id);

    let cocinero=cocineros.find(c=>c.id===id);

    if(cocinero){
        res.json(cocinero);
    }
    else{
        res.status(404).end();
    }
});