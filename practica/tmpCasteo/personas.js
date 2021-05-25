//Realizar validaciones de setters
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

    static GenerarIdProximo(array){
        let IdNuevo=-1;       

        array.forEach(element => {
            if(element.id>IdNuevo)
                IdNuevo=element.id;
        });

        return IdNuevo+1;
    }
}