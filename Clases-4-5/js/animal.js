import {Mascota} from './mascota.js';

function Animal(tipo,edad){
    let _tipo=tipo;
    this.edad=edad;

    this.setTipo=function(value){
        _tipo=value;
    };

    this.getTipo=function(){
        return _tipo;
    };
}

Animal.prototype.presentarse=function(){
    console.log(`Soy un Animal de tipo ${this.getTipo()}`);
};

export default{Animal};