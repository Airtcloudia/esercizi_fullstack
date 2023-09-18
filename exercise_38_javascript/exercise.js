const isLogged = true;

//promise chaining 
//funzione che devo sapere se l'utente è connesso oppure no
function isLoggedin(connected){
    return new Promise ((resolve,reject)=> {
            if(connected === true) {
                resolve(Math.random()); //numero a caso
            } else {
                reject("L'utente non è connesso");
            }
        
    })
}

function getUserDetails(number){
    return new Promise ((resolve,reject)=> {
            if(number > 0.5) {
                resolve({"name": "John", "age": "24"}); //json come output
            } else {
                reject("error");
            }
        
    })
}



//concateno
isLoggedin(isLogged)
.then((number) => {
    return getUserDetails(number);
})
.then((message) => console.log(message))
.catch((err) => console.error(err))


