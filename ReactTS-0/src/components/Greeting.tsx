import React from "react";

// Define the props type
type GreetingProps = {
    name: string;
};

// React.FC with props
export const Greeting: React.FC<GreetingProps> = (props) => {
    return <h2>Hello, {props.name}</h2>;
};
