let count = 0; // This is like your state variable

function setCount(newValue) {
  count = newValue; // This updates the value
  render(); // Imagine this re-draws your UI with the new value
}

function render() {
  console.log("Current count is:", count);
}

// Usage:
setCount(1); // count is now 1, UI updates
setCount(2); // count is now 2, UI updates
