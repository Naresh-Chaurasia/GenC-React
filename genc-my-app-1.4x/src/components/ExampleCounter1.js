import React, { useEffect, useState } from "react";

// useState(0) creates a variable called count with a starting value 0.
// setCount is used to change the value.
// When setCount is called, React re-renders the component and updates the UI.
// setCount is a state-update function created by React’s useState hook
// It accepts exactly one argument.
// That argument becomes the new value of the state variable count.
// After calling setCount, React re-renders the component with the updated value.

function Counter() {
    // count = current value
    // setCount = function to update the value
    const [count, setCount] = useState(0);

    // useEffect runs after the component renders
    useEffect(() => {
        console.log("The component rendered. Current count:", count);
    });

    return (
        <div>
            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
        </div>
    );
}

export default Counter;
