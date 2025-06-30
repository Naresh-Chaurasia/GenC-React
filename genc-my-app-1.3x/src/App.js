import logo from "./logo.svg";
import "./App.css";
import TodoRowItem1 from "./components/TodoRowItem1";
import TodoRowItem2 from "./components/TodoRowItem2";
import TodoTable from "./components/TodoTable";
import TodoTable2 from "./components/TodoTable2";

function App() {
  const todos = [
    { rowNumber: 11, rowDescription: "Feed Dog", rowAssigned: "NC" },
    { rowNumber: 21, rowDescription: "Feed Dog2", rowAssigned: "NC2" },
    { rowNumber: 31, rowDescription: "Feed Dog3", rowAssigned: "NC3" },
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">TODO 1.3x</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          {/* <TodoTable2 todos={todos} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
