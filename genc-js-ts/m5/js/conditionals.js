// Employee
let employee = {
  firstName: "David",
  lastName: "Tucker",
  startDate: new Date(2016, 1, 3),
  numYearsService: 7,
  isActive: true,
  department: "Engineering",
  title: "VP Engineering",
};

// Example from module introduction
let badgeColor;

if (employee.numYearsService < 5) {
  employee.badgeColor = "blue";
} else if (employee.numYearsService < 10) {
  employee.badgeColor = "yellow";
} else if (employee.numYearsService < 15) {
  employee.badgeColor = "red";
} else if (employee.numYearsService < 20) {
  employee.badgeColor = "purple";
} else {
  employee.badgeColor = "silver";
}
console.log(
  `Years: ${employee.numYearsService} Badge Color: ${employee.badgeColor}`
);

// Evaluating multiple conditions for truthyness in all conditions
if (employee.numYearsService > 5 && employee.department === "Engineering") {
  console.log(`Employee meets criteria`);
}

// Evaluating multiple conditions for truthyness in one or more conditions
if (employee.numYearsService > 10 || employee.title.startsWith("VP")) {
  console.log(`Employee meets criteria`);
}

// Evaluating for a condition to NOT be true
if (employee.numYearsService > 20 && !employee.isActive) {
  console.log(`Employee is retired with full retirement benefit`);
}

// Using the ternary operator
if (employee.numYearsService > 10) {
  employee.annualBonus = 1000;
} else {
  employee.annualBonus = 500;
}

employee.annualBonus = employee.numYearsService > 10 ? 1000 : 500;
