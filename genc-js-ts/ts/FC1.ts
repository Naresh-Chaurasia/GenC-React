// Define a type for the function parameter
type GreetingProps = {
  name: string;
};

// Define a function that takes GreetingProps and returns a message
function Greeting({ name }: GreetingProps): string {
  return `Hello, ${name}!`;
}

// Call the function and log the result
console.log(Greeting({ name: "Alice" }));
