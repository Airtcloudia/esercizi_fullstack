
const repeatHello = (callback) => {
    const seIntervalCallBack = setInterval(callback, 1000); //mi serve salvarlo in una costante
    //per poterlo riusare                                                        
    setTimeout(() => { //setTimeout si usa insieme a clearInterval
        clearInterval(seIntervalCallBack) //passo la costante come primo parametro
    }, 5000); //si ferma dopo 5 secondi (2°parametro) con clearInterval
}
const callBackFunc = () => {
    console.log("hello")
};

repeatHello(callBackFunc); //funzione riutilizzabile


