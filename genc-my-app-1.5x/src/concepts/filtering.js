const numbers = [1, 2, 3, 4, 5];

// Use filter to create a new array without the number 3
const filteredNumbers = numbers.filter(function (value) {
  return value !== 10; // Keep all numbers except 3
});

console.log(filteredNumbers); // Output: [1, 2, 4, 5]
