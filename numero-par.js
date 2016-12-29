function sumaPares(n) {
    var suma = 0;
    for(var i = 0; i <= n; i = i+2){
        suma = suma + i;
    }
    return suma;
}