let message = "Hello, world!";

console.log(message);

console.log("Reassignement of message variable");

message = "Hello, Odin!";

console.log(message);

console.log("------------------------------");

console.log("Basic arithmetic operations");

let a = 10;
let b = 5;

console.log("a =", a);
console.log("b =", b);

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

console.log("------------------------------");

let bigint = 123n;

console.log("BigInt value:", bigint);
console.log("Type of BigInt:", typeof bigint);

console.log("------------------------------");

const name = "Sam";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Multi-line strings too:
const msg = `Line one
Line two`;
console.log(msg);

console.log("------------------------------");

console.log("Function to return favorite animal");

function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

const animal_msg = favoriteAnimal("Goat");
console.log(animal_msg);

console.log("------------------------------");
