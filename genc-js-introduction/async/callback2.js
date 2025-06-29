function orderPizza(callback) {
  console.log('Ordering pizza...');
  setTimeout(() => {
    console.log('Pizza is ready 🍕');
    callback();
  }, 2000);
}

function getDrink(callback) {
  console.log('Getting drinks...');
  setTimeout(() => {
    console.log('Drinks are ready 🥤');
    callback();
  }, 1000);
}

function setTable(callback) {
  console.log('Setting the table...');
  setTimeout(() => {
    console.log('Table is ready 🍽️');
    callback();
  }, 500);
}

// Nested callbacks (Callback Hell!)
orderPizza(() => {
  getDrink(() => {
    setTable(() => {
      console.log('All set — let’s eat! 🎉');
    });
  });
});