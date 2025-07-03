// Function that accepts a Person type
function greet(person) {
    console.log("Hello, ".concat(person.name, ". You are ").concat(person.age, " years old."));
}
// Create a variable of type Person
var student = {
    name: "Alice",
    age: 22,
};
// Call the function
greet(student);
