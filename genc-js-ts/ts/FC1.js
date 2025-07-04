// Define a function that takes GreetingProps and returns a message
function Greeting(_a) {
    var name = _a.name;
    return "Hello, ".concat(name, "!");
}
// Call the function and log the result
console.log(Greeting({ name: "Alice" }));
