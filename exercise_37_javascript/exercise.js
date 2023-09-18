const number = 15;

let ourPromise = new Promise ((resolve, reject) => {
    const number = Math.number ();
    if (number > 10) {
        resolve(number);
    } else {
        reject(number);
    }
})

ourPromise
.then((val) => console.log(val))
.catch((err) => console.error(err))