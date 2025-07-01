import React, { useState } from "react";

function TodoFormState2(props) {
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
            onChange={(e) => onAssignedChange(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            value={description}
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

export default TodoFormState2;
