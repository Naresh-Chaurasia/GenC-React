import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoTable2 from "./components/TodoTable2";

function App() {
  // Declare a state variable 'todos' and a function 'setTodos' to update it
  // useState - is a React Hook that lets you add state to functional components
  const [todos, setTodos] = useState([
    { rowNumber: 11, rowDescription: "Feed Dog", rowAssigned: "NC" },
    { rowNumber: 21, rowDescription: "Feed Dog2", rowAssigned: "NC2" },
    { rowNumber: 31, rowDescription: "Feed Dog3", rowAssigned: "NC3" },
  ]);

  // Log todos whenever they change
  // To display the updated todos after adding a new todo, use a useEffect hook to log todos whenever it changes. This is because setTodos is asynchronous, so logging right after setTodos will not show the updated value.
  // Add this code after your useState declaration:
  useEffect(() => {
    console.log("Updated Todos:", todos);
  }, [todos]);

  const handleAddTodo = () => {
    const newTodo = {
      rowNumber: todos.length > 0 ? todos[todos.length - 1].rowNumber + 10 : 1,
      rowDescription: "New Task",
      rowAssigned: "Someone",
    };
    //Updates the state variable todos by adding a new item (newTodo) to the end of the existing list.
    setTodos([...todos, newTodo]);
    console.log("New Todo Added:", todos);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">TODO 1.3x</div>
        <div className="card-body">
          <TodoTable2 todos={todos} />
          <button className="btn btn-primary" onClick={handleAddTodo}>
            Add New Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
