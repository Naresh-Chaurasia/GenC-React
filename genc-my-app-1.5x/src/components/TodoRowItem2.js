function TodoRowItem2(props) {
  return (
    <tr onClick={
      () => props.deleteTodo(props.rowNumber)
      }>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem2;
