// declare the object then write the key value pairs (properties) that define the object
// can also include functions
// 'this' key word allows you to manipulate code by calling the code from the current object/instance
// declare methods within objects by using function syntax directly with method name; see below
const person = {
  name: "Muhammad",
  age: 26,
  greet() {
    console.log(`Hi, I am ${this.name}.`);
  },
};

person.greet();

// ARRAYS AND ARRAY METHODS
// arrays in JS are lists of values, strings, objects, boolean values, objecsts, nested arrays
// use [] indexing to manipulate elements in array

const hobbies = ["Sports", "Cooking"];

// use a for loop to iterate through elements of the array
// can pass in any keyword to stand for the elements iterated from array

for (let activity of hobbies) {
  console.log(activity);
}

// .map() method allows to manipulate an array; outputs a new array; old array unaffected
// can use an arrow function or regular function to affect elements within the array


console.log(hobbies.map(activity => 'Activity: ' + activity));
console.log(hobbies);
// JS supports several built-in methods to manipulate arrays; .pop() .push() etc
// refer to documentation/notes for details on methods for arrays

// hobbies.pop();

console.log(hobbies);

// if you .pop() the array, the final element is removed; see console output

// use .map() to make a new array; pass in a function that will iterate through array and affect each element.

// hobbies.map()

// print it to the console

console.log(
  hobbies.map((activity) => {
    return "Activity: " + activity;
  })
);

