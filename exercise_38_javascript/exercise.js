const isLogged = true;

//promise chaining 
function isLoggedin(isLogged){
    return newPromise ((resolve,reject)=> {
        setTimeout(() => {
            let isLogged= Math.random();
            if(isLogged > 0.5) {
                resolve(isLogged);
            } else {
                reject(newError("Not Logged in!"));
            }
        }, 500);
    })
}

function getUserDetails(isLogged){
    return newPromise ((resolve,reject)=> {
        setTimeout(() => {
            if(isLogged < 5) {
                resolve({"name": "John", "age": "24"}); //json come output
            } else {
                reject(newError("error"));
            }
        }, 500);
    })
}

function getUserName({ name }){ //destructuring
    return name;
}

//concateno
isLoggedin(3)
.then(getUserDetails)
.then(getUserName)
.then((name) => console.log(name))
.catch((err) => console.error(err))

