// Review basic JS and refer to documentation for more info to help with NodeJS

// Declare a variable; case sensitive

var userName = "Muhammad";

// Print variable to the console

console.log(userName);

var userAge = 26;

var playsSports = true;

// Declare functions that manipulate the arguments passed in; function name(arguments){code;}

function makeUserProfile(userName, userAge, playsSports) {
  return (
    "Member: " +
    userName +
    " Age is " +
    userAge +
    " Active status: " +
    playsSports
  );
}

// simple var declarations below
var a;
a = 7;

var b;

// make this test.js program print the user profile function to the console
// pass in the arguments the function asks for; they have to be defined first
// remember to pass in the arguments in the same order the function uses them;
// function does not distinguish which variables passed in, only what happens in each place to pass in
console.log(makeUserProfile(userName, userAge, playsSports));

// var syntax is deprecated;
// let syntax to declare variables when they will be changing values;
// const syntax to declare variables that will not change value;
// changing a const variable after having declared it will return an error on the console;
// use const as often as possible to help avoid errors


// use arrow functions for shorter syntax; declare a const function name

/* const makeUserProfile = (userName, userAge, playsSports) => {
    return (
        insert code
    );
};
*/ 

// condense the arrow function for one liners;

const addOne = a => a + 1;

// must use () for a function with no arguments; cannot use white space


