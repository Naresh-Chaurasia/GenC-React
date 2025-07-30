function processUser(callback) {
  const user = "John";
  callback(user); // calling the passed-in function
}

// Passing a function expression
processUser(function(name) {
  console.log("Processing user:", name); // Output: Processing user: John
});