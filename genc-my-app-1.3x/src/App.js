import logo from "./logo.svg";
import "./App.css";
import TodoRowItem1 from "./components/TodoRowItem1";
import TodoRowItem2 from "./components/TodoRowItem2";
import TodoTable from "./components/TodoTable";
import TodoTable2 from "./components/TodoTable2";

function App() {
  // Define a constant array named 'todos' to hold a list of todo items
  const todos = [
    // Each item is an object with 3 key-value pairs
    { rowNumber: 11, rowDescription: "Feed Dog", rowAssigned: "NC" },   // Task 1
    { rowNumber: 21, rowDescription: "Feed Dog2", rowAssigned: "NC2" }, // Task 2
    { rowNumber: 31, rowDescription: "Feed Dog3", rowAssigned: "NC3" }, // Task 3
    { rowNumber: 41, rowDescription: "Feed Dog 4", rowAssigned: "NC4" } // Task 4
  ];


  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">TODO 1.3x</div>
        <div className="card-body">
          {/* <TodoTable todos={todos} /> */}
          <TodoTable2 todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
