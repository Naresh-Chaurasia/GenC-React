import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExampleCounter1 from "./components/ExampleCounter1";
import TodoTable2 from "./components/TodoTable2";

function App() {

  const todos = [
    // Each item is an object with 3 key-value pairs
    { rowNumber: 11, rowDescription: "Feed Dog", rowAssigned: "NC" },   // Task 1
    { rowNumber: 21, rowDescription: "Feed Dog2", rowAssigned: "NC2" }, // Task 2
    { rowNumber: 31, rowDescription: "Feed Dog3", rowAssigned: "NC3" }, // Task 3
    { rowNumber: 41, rowDescription: "Feed Dog 4", rowAssigned: "NC4" } // Task 4
  ];

    // addTodo without arguments
  const addTodo1 = () => {
    console.log("Hello...");
  }

  const addTodo2 = () => {
    const newTodo = {
      rowNumber: todos.length + 1,
      rowDescription: "New Task",
      rowAssigned: "Someone",
    };
    todos.push(newTodo);
    console.log("New Todo Added:", todos);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">TODO TodoFormStateButton3 Page</div>
        <div className="card-body">

          <ExampleCounter1 />

          {/* mean that I am passing argument to TodoTable2 with name todos1 and the value is todos */}
          <TodoTable2 todos_arg={todos} /> 

           {/* onClick, call the method addTodo */}
          <button className="btn btn-primary" onClick={addTodo1}>
            Add Todo1
          </button>

          <br/>
          <br/>

          <button className="btn btn-primary" onClick={addTodo2}>
            Add Todo2
          </button>

        </div>
      </div>
    </div>
  );
}


export default App;
