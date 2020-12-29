// Ref type objects always point to the location of storage and change what is in that block of storage
// Ref type pointer (address to place in memory) does not change, only the content in that block changes; will always point to what is in the block of storage

// SPREAD AND REST OPERATORS

const hobbies = [
  "Boxing",
  "Reading",
  "Exercising",
  "Electronics",
  "Programming",
  "Coffee",
];

// the .slice() method for arrays will ouput a copy of the original array. pass in an index range to only copy those to new array
// note the range only outputs one less than the final index in the range; 
// 0-2 only outputs elements 0,1 from the END of the array
// refer to documentation for details about .slice() method

const slicedArray = hobbies.slice(0 - 2);
console.log(slicedArray);

// the spread ... operator iterates through the elements of an array or properties of an object and copies them to the new array or object.

const spreadArray = [...hobbies];
console.log(spreadArray);

// use ... operator on objects; creates new object with copied properties, methods etc.
// see below

const person = {
    name: 'Muhammad',
    age: 26
};

const spreadPerson = {...person};
console.log(spreadPerson);

// REST ... OPERATOR
// the rest operator uses same syntax as the spread operator;
// rest operator used to merge arguments passed in to a fucntion and outputs to an array.
