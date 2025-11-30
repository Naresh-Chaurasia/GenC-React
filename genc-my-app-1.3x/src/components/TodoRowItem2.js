// Functional component that renders a single row in the todo list table
// Takes three props: rowNumber (position), rowDescription (task), and rowAssigned (assignee)
function TodoRowItem2(props) {
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>  {/* Display the todo item number */}
      <td>{props.rowDescription}</td>         {/* Display the todo description */}
      <td>{props.rowAssigned}</td>            {/* Display who the task is assigned to */}
    </tr>
  );
}

export default TodoRowItem2;
