// Define a custom type
type Person = {
  name: string,
  age: number,
};

// Function that accepts a Person type
function greet(person: Person): void {
  console.log(`Hello, ${person.name}. You are ${person.age} years old.`);
}

// Create a variable of type Person
const student: Person = {
  name: "Alice",
  age: 22,
};

// Call the function
greet(student);
