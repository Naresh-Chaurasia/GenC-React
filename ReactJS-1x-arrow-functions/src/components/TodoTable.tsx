import { TodoModel } from "../models/TodoModel";
import { TodoRowItem } from "./TodoRowItem";
import React from "react";

interface TodoTableProps {
  todos: TodoModel[];
  deleteTodo: Function;
}

export const TodoTable: React.FC<TodoTableProps> = (props: TodoTableProps) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

