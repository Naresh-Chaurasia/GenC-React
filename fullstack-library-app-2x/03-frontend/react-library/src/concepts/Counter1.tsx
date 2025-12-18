import { useEffect, useState } from "react";


function Counter1() {
    const [count, setCount] = useState(0);

    // useEffect runs after the component renders
    useEffect(() => {
        console.log("The component rendered. Current count:", count);
    });

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

export default Counter1;