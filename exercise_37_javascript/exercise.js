
const number = 15;

const checknumber = (number) => { //creo una funzione per passare number
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(`${number} è maggiore di 10`); //per passare la costante
        } else {
            reject(`${number} è minore di 10`);
        };
    });
};



checknumber(number)
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log(err); 
    });