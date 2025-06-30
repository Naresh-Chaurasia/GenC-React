import logo from "./logo.svg";
import "./App.css";
import TodoRowItem1 from "./components/TodoRowItem1";
import TodoRowItem2 from "./components/TodoRowItem2";

function App() {
  const todos = [
    { rowNumber: 11, rowDescription: "Feed Dog", rowAssigned: "NC" },
    { rowNumber: 21, rowDescription: "Feed Dog2", rowAssigned: "NC2" },
    { rowNumber: 31, rowDescription: "Feed Dog3", rowAssigned: "NC3" },
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">TODO 1.2</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              {/* Each th with scope="col" indicates that it is a header for the column below it. */}
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Assigned</th>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Feed Dog</td>
                <td>NC</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Dance</td>
                <td>NC</td>
              </tr>

              <TodoRowItem1 />

              <TodoRowItem2
                rowNumber={todos[0].rowNumber}
                rowDescription={todos[0].rowDescription}
                rowAssigned={todos[0].rowAssigned}
              />

              <TodoRowItem2
                rowNumber={todos[1].rowNumber}
                rowDescription={todos[1].rowDescription}
                rowAssigned={todos[1].rowAssigned}
              />

              <TodoRowItem2
                rowNumber={todos[2].rowNumber}
                rowDescription={todos[2].rowDescription}
                rowAssigned={todos[2].rowAssigned}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
