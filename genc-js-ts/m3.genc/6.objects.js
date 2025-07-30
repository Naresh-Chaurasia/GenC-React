// Create an Object with an object literal (preferred)
let obj1 = {};

// Create an Object with a constructor
// Object is accessible because it is a built-in global constructor provided by the JavaScript runtime.
let obj2 = new Object();

// Populate properties on an object
obj1.firstName = "David";
obj1.lastName = "Tucker";
obj1.isActive = true;
obj1.startDate = new Date("January 1, 2022");
obj1.vacationDays = 14;
console.log(obj1);
