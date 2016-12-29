function stringMultiplicar(n) {
    var salida = "";
    var multiplicar=0;
    for(var i=1; i<=10; i++){
        multiplicar=i*n;
        salida += n+"x"+i+"="+multiplicar;
        if(i<10){
            salida += "/";
        }
    }
    return salida;
}