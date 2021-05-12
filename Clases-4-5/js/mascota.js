function Mascota(nombre,edad,tipo,vacunada=false){
    Animal.call(this,tipo,edad,vacunada);//Llama a su constructor, aclarado scope primer argumento
    let _nombre=nombre;
    this.vacunada=vacunada;
    
    this.setNombre=function(value){
        _nombre=value;
    };

    this.getTipo=function(){
        return _tipo;
    };

    Mascota.prototype.informarHambre=function(){
        console.log(`${this.getNombre()} tiene hambre`);
    }
    Mascota.prototype.presentarse=function(){
        let mensaje=Animal.presentarse.call(this);
        return mensaje + " y me llamo " + this.getNombre();
    }
}
 
Object.setPrototypeOf(Mascota.prototype,Animal.prototype);