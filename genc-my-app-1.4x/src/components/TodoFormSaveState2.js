import React, { useState } from "react";

function TodoFormSaveState2() {
  // State for assigned and description fields
  const [assigned, setAssigned] = useState("");
  const [description, setDescription] = useState("");

  // Handler for description change
  const onDescriptionChange = (event) => {
    setDescription(event.target.value); // Update state
    console.log("Description typed:", event.target.value); // Display the value typed
  };

  // Handler for assigned change
  const onAssignedChange = (event) => {
    setAssigned(event.target.value); // Update state
    console.log("Assigned typed:", event.target.value); // Display the value typed
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            value={assigned}
            // Inline function
            // React creates this function right here inside the JSX.
            // When the user types, this function executes immediately.
            // Good for very short logic, but can make JSX harder to read
            // if the logic becomes large.
            onChange={(event) => {
              setAssigned(event.target.value);
              console.log("Assigned typed:", event.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={5}
            required
            value={description}
            // Reference to a separate function.
            // React will call the existing function named
            // onDescriptionChange whenever the value changes.
            // Keeps JSX cleaner and allows the function to be
            // reused elsewhere if needed.
            onChange={onDescriptionChange}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary mt-3">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoFormSaveState2;
