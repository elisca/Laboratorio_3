const sumar=(a,b)=>{
    return a+b;
};

const restar=(a,b)=>{
    return a-b;
};

const multiplicar=(a,b)=>{
    return a*b;
};

const dividir=(a,b)=>{
    if(!validarCero(b))
        return a/b;
    return 0;
};

const validarCero=(a)=>{
    if(a==0){
        return 1;
    }
    return 0;
};

exports.sumar=sumar;
exports.restar=restar;
exports.multiplicar=multiplicar;
exports.dividir=dividir;

//Module.exports=multiplicar;