function repeatHello(callback){
    setInterval(callback, 1000); //ogni 1000 secondo stampa hello senza una fine
}


const callbackfunc = () => {
    console.log("Hello")
}

repeatHello (callbackfunc);

