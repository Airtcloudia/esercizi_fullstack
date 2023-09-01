const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const key ={
  id: person.id,
  age: person.age
}
//const json = JSON.stringify(person);
const json = JSON.stringify(key); //non passo più person ma key 

console.log(json); // Should return: { id: 1, age: 25 }