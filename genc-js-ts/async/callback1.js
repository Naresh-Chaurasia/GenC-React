function orderPizza(callback) {
  console.log('Ordering pizza...');

  // Simulate pizza making time with setTimeout
  setTimeout(() => {
    console.log('Pizza is ready!');
    callback(); // This is like the shop "calling you back"
  }, 2000);
}

// This is the callback function:
function eatPizza() {
  console.log('Time to eat the pizza! 🍕');
}

// Start the process:
orderPizza(eatPizza);