/* function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(sum(1, 2, 3, 4, 5)); */

function sum(...rest) { //rest operator
    return number.reduce((acc,val)=> acc + val, 0) //accumulatore e valore parametri della funzione .reduce
}

console.log(sum(1, 2, 3, 4, 5)); //tutti i numeri che passo alla funzione