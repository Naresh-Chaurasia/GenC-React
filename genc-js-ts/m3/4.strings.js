
// Creating strings
let single = "Hello";
let double = "World";
let template = `Hi ${single} ${double}`; // template literal
console.log(template); // Output: Hi Hello World

// Finding string length
let str = "JavaScript";
console.log(str.length); // Output: 10

// Accessing characters
console.log(str[0]); // Output: J
console.log(str.charAt(1)); // Output: a

// Converting case
let text = "hello world";
console.log(text.toUpperCase()); // Output: HELLO WORLD
console.log(text.toLowerCase()); // Output: hello world

// Searching inside a string
let sentence = "I love JavaScript";
console.log(sentence.indexOf("love")); // Output: 2
console.log(sentence.includes("Java")); // Output: true

// Extracting a substring
let greeting = "Hello World!";
console.log(greeting.substring(0, 5)); // Output: Hello
console.log(greeting.slice(6, 11)); // Output: World

// Replacing text
let phrase = "I like cats";
let newPhrase = phrase.replace("cats", "dogs");
console.log(newPhrase); // Output: I like dogs

// Splitting a string into an array
let fruits = "apple,banana,orange";
let fruitArray = fruits.split(",");
console.log(fruitArray); // Output: ['apple','banana','orange']

// Concatenating strings
let a = "Hello";
let b = "World";
let result = a + " " + b;
let result2 = a.concat(" ", b);
console.log(result); // Output: Hello World
console.log(result2); // Output: Hello World

// Trimming whitespace
let messy = "   hello   ";
let clean = messy.trim();
console.log(clean); // Output: hello

