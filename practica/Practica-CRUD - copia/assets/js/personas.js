//Realizar validaciones de setters
import {guardarDatos} from './ls.js';

export default class Persona{
    constructor(id,nombre,apellido,email,edad){
        this.Id=id;
        this.Nombre=nombre;
        this.Apellido=apellido;
        this.Email=email;
        this.Edad=edad;
    }

    set Id(value){
        this.id=value;
    }

    set Nombre(value){
        this.nombre=value;
    }

    set Apellido(value){
        this.apellido=value;
    }

    set Email(value){
        this.email=value;
    }

    set Edad(value){
        this.edad=value;
    }

    get Id(){
        return this.id;
    }

    get Nombre(){
        return this.nombre;
    }

    get Apellido(){
        return this.apellido;
    }

    get Email(){
        return this.email;
    }

    get Edad(){
        return this.edad;
    }

    static Equals(persona1,persona2){
        return parseInt(persona1.id)==parseInt(persona2.id);
    }


    static ObtenerIndicePorId(array,persona){
        if(array!=null){
            for(let i=0;i<array.length;i++){
                if(Persona.Equals(array[i],persona))
                    return i;
            }
        }
        return -1;
    }

    static ObtenerPersonaPorId(array,id){
        let resultado=array.filter(function(e,i){
            return i==id;
        });
        return resultado[0];
    }

    static altaPersona(array,item){
        array.push(item);
        guardarDatos("arrayPersonas",array);
        guardarDatos("idArrayPersonas",parseInt(item.id));
        alert("Persona dada de alta satisfactoriamente.");
    }
    
    static modificarPersona(array,item){
        let id=Persona.ObtenerIndicePorId(array,item);
        array[id]=item;
        guardarDatos("arrayPersonas",array);
        alert("Persona modificada satisfactoriamente.");
    }
    
    static bajaPersona(array,item){
        let id=Persona.ObtenerIndicePorId(array,item);
        array.splice(id,1);
        guardarDatos("arrayPersonas",array);
        alert("Persona dada de baja satisfactoriamente.");
    }
}