import React, { useState, useEffect } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState<
    { rowNumber: number; rowDescription: string; rowAssigned: string }[]
  >([]);

  // useEffect is a React Hook that lets you run code after the component renders.
  // Here, we use it to fetch todos from the REST API when the component mounts.
  useEffect(() => {
    // Call the REST API endpoint to get the list of todos
    fetch("http://localhost:8080/api/users/todos")
      // Convert the response to JSON
      .then((response) => response.json())
      // Update the 'todos' state with the data received from the API
      .then((data) => setTodos(data))
      // If there's an error (e.g., network issue), log it to the console
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);
  // The empty dependency array [] means this effect runs only once, when the component first mounts.

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
          >
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
