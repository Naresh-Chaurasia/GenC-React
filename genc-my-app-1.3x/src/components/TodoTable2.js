import TodoRowItem2 from "./TodoRowItem2";

function TodoTable2(props) {
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
        {/* Map through the todos array to render a TodoRowItem2 for each todo */}
        {props.todos.map((todo, index) => (
          <TodoRowItem2
            key={todo.rowNumber || index}  {/* Unique key for React's reconciliation, falls back to array index */} 
            rowNumber={todo.rowNumber}     {/* Pass todo number to the row component */}
            rowDescription={todo.rowDescription}  {/* Pass todo description */}
            rowAssigned={todo.rowAssigned}        {/* Pass todo assignee */}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable2;
