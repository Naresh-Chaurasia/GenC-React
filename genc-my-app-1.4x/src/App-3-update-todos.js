import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExampleCounter1 from "./components/ExampleCounter1";
import TodoTable2 from "./components/TodoTable2";

function App() {

  // Declare a state variable 'todos' and a function 'setTodos' to update it
  // useState - is a React Hook that lets you add state to functional components
  const [todos, setTodos] = useState([
    { rowNumber: 11, rowDescription: "Feed Dog", rowAssigned: "NC" },
    { rowNumber: 21, rowDescription: "Feed Dog2", rowAssigned: "NC2" },
    { rowNumber: 31, rowDescription: "Feed Dog3", rowAssigned: "NC3" },
  ]);

    // addTodo without arguments
  const addTodo = () => {
    const newTodo = {
      rowNumber: todos.length + 1,
      rowDescription: "New Task",
      rowAssigned: "Someone",
    };

    //Updates the state variable todos by adding a new item (newTodo) to the end of the existing list.
    // Spread Operator
    setTodos([...todos, newTodo]);
    console.log("New Todo Added:", todos);
  };


  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">TODO TodoFormStateButton3 Page</div>
        <div className="card-body">

          <ExampleCounter1 />

          {/* mean that I am passing argument to TodoTable2 with name todos1 and the value is todos */}
          <TodoTable2 todos_arg={todos} /> 

           {/* onClick, call the method addTodo */}
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo1
          </button>

          <br/>
          <br/>


        </div>
      </div>
    </div>
  );
}


export default App;
