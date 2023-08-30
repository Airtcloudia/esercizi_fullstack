/*const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

console.log(id, personInfo); */

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, ...personInfo } = person; //da firstName a age è contenuto in personInfo ovvero la restante parte 

console.log(id, personInfo);