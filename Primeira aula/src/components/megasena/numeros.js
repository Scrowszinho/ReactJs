function geraNumeros(qtde){
    const num = [qtde];
    for(var i = 0 ; i< qtde; i++){
        num[i] = Math.floor(Math.random() * 100);
        if(num.indexOf(Math.floor(Math.random() * 100)) === -1) num.push(Math.floor(Math.random() * 100));
    }
    return console.log(num);
}

export default geraNumeros;