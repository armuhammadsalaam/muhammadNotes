// use built-in JS timer function for async code example;
// use time in milliseconds: 2000ms is 2sec
// async code does not execute immediately, executes after some unit of time

// the console will output all synced lines of code before running async code; setting the timer even for 1ms or near instant makes it async.

const fetchData = (callback) => {
  setTimeout(() => {
    callback("Finished!");
  }, 2500);
};

setTimeout(() => {
  console.log("Timer has expired! This is asynchronius.");
  fetchData((string) => {
    console.log(string);
  });
}),
  2000;

console.log("This is synchronius code.");
console.log("This is more synchronius code.");
console.log(
  "The console outputs all synchronius code before all asynchronius code no matter how small a delay in execution."
);
