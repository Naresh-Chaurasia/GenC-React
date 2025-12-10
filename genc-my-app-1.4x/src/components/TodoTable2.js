import TodoRowItem1 from "./TodoRowItem1";
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
        {props.todos_arg.map((todo, index) => (
          <TodoRowItem2
            key={todo.rowNumber || index}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable2;
