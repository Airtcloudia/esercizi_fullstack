/*let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore.push(newNumber);
console.log(numberStore); */

let numberStore = [0, 1, 2];
let newNumber = [...numberStore,3];
console.log(numberStore);
console.log(newNumber);