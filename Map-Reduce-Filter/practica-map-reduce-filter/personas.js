export default class Persona{
    constructor(id,nombre,apellido,email,edad,sexo,tatuajes,piercings,otros){
        this.Id=id;
        this.Nombre=nombre;
        this.Apellido=apellido;
        this.Email=email;
        this.Edad=edad;
    }

    set Id(value){
        if(value>=0)
            this.id=value;
        else{
            console.warn(`Error al intentar asignar ID: ${value}. Se asignará -1.`);
            this.id=-1;
        }
    }

    set Nombre(value){
        if(value.length>0)
            this.nombre=value;
        else{
            console.warn(`Error al intentar asignar Nombre. Cadena vacía!. Se asignará "<nombre>".`);
            this.nombre="<nombre>";
        }
    }

    set Apellido(value){
        if(value.length>0)
            this.apellido=value;
        else{
            console.warn(`Error al intentar asignar Apellido. Cadena vacía!. Se asignará "<apellido>".`);
            this.apellido="<apellido>";
        }
    }

    set Email(value){
        if(value.length>0)
            this.email=value;
        else{
            console.warn(`Error al intentar asignar Email. Cadena vacía!. Se asignará "<email>".`);
            this.email="<email>";
        }
    }

    set Edad(value){
        if(value>=0)
            this.edad=value;
        else{
            console.warn(`Error al intentar asignar Edad. Valor no numérico o negativo. Se asignará "-1".`);
            this.edad=-1;
        }
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
        guardarDatos("idArrayPersonas",parseInt(item.Id));
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