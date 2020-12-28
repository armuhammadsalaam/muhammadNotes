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

// arrays in JS are lists of values, strings, objects, boolean values, objecsts, nested arrays
// use [] indexing to manipulate elements in array

const hobbies = ["Sports", "Cooking"];

// use a for loop to iterate through elements of the array
// can pass in any keyword to stand for the elements iterated from array


for (let activity of hobbies) {
  console.log(activity);
}
