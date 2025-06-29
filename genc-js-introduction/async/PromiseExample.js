function orderPizza() {
  return new Promise((resolve, reject) => {
    console.log("Ordering pizza...");
    setTimeout(() => {
      const success = true; // Change to false to test error
      if (success) {
        resolve("Your pizza is here! 🍕");
      } else {
        reject("Sorry, no pizza today. ❌");
      }
    }, 2000);
  });
}

// Usage
orderPizza()
  .then((message) => {
    console.log("✅", message); // Runs if successful
  })
  .catch((error) => {
    console.log("⚠️", error); // Runs if there was an error
  });

console.log("You can do other stuff while waiting...");
