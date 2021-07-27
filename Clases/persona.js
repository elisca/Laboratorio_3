export default class Persona{
    constructor(dni,nombre,apellido,edad){
        this.setDni(dni);
        this.setNombre(nombre);
        this.setApellido(apellido);
        this.setEdad(edad);
    }

    getDni(){
        return this._dni;
    }

    getNombre(){
        return this._nombre;
    }

    getApellido(){
        return this._apellido;
    }

    getEdad(){
        return this._edad;
    }

    setDni(value){
        this._dni=value;
    }

    setNombre(value){
        this._nombre=value;
    }

    setApellido(value){
        this._apellido=value;
    }

    setEdad(value){
        this._edad=value;
    }

    toString(){
        return `Persona->DNI: ${this.getDni()}-${this.getNombre()} ${this.getApellido()} Edad: ${this.getEdad()}`;
    }

    static MostrarTipo(){
        return "Soy tipo 'Persona'";
    }
}

export class Empleado extends Persona{
    constructor(dni,nombre,apellido,edad,puesto,sueldoBasico){
        super(dni,nombre,apellido,edad);
        this.setPuesto(puesto);
        this.setSueldoBasico(sueldoBasico);
    }

    getPuesto(){
        return this._puesto;
    }

    getSueldoBasico(){
        return this._sueldoBasico;
    }

    setPuesto(value){
        this._puesto=value;
    }

    setSueldoBasico(value){
        this._sueldoBasico=value;
    }

    toString(){
        return `${super.toString()} Puesto:${this.getPuesto()} Sueldo básico:\$${this.getSueldoBasico()}`;
    }
}