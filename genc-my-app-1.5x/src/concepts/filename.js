// Simulate a list of todos
const todos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
];

// Function to delete a todo by rowNumber
function deleteTodo(rowNumber) {
  const filtered = todos.filter((todo) => todo.rowNumber !== rowNumber);
  console.log("After delete:", filtered);
}

// Function to simulate a row item (like a React component)
function TodoRowItem2(props) {
  // Simulate clicking the row to delete
  console.log(
    `Row: ${props.rowNumber}, Description: ${props.rowDescription}, Assigned: ${props.rowAssigned}`
  );
  // Simulate a click event
  props.deleteTodo(props.rowNumber);
}

// Try it out:
TodoRowItem2({
  rowNumber: 1,
  rowDescription: "Feed puppy",
  rowAssigned: "User One",
  deleteTodo: deleteTodo, // Pass the function as a prop
});
