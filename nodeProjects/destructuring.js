// DESTRUCTURING assignment syntax makes it possible to unpack calues from arrays, or properties from objects, into distinct variables. 
// use the {} with properties, elements, methods, etc that you want to tie to an object;
// ex below creates person object with properties then uses {} notation to take the properties and create variables to manipulate
const person = {
    name: "Muhammad",
    age: 26
};

const {name, age} = person;
console.log(name, age);

// Destructuring Arrays:

const numList = [1,2,3,4,5,6,7,8,9];
const [first, second, third] = numList;
console.log(first,second,third);