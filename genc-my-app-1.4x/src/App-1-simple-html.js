import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <div>TODO</div>
        <div>
          <table>
            <thead>
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
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
