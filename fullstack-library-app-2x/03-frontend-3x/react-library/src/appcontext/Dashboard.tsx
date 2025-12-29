import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
    const user = useContext(UserContext);

    return <h2>Welcome, {user}</h2>;
}

export default Dashboard;