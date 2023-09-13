
function repeatHello(callback){
    setInterval(callback, 1000);
}


const callbackfunc = () => {
    console.log("Hello")
}

repeatHello (callbackfunc);


