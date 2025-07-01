import React, { useState } from "react";

function TodoFormOnChange1(props) {
  // Handler for description change
  const onDescriptionChange = (event) => {
    console.log("Description typed:", event.target.value); // Display the value typed
  };

  // Handler for description change
  const onAssignedChange = (event) => {
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
            onChange={onAssignedChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
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

export default TodoFormOnChange1;
