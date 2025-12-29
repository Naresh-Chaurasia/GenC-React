import React from "react";
import { UserContext } from "./appcontext/UserContext";
import Dashboard from "./appcontext/Dashboard";

function App() {
    const user = "Naresh";

    return (
        <UserContext.Provider value={user}>
            <Dashboard />
        </UserContext.Provider>
    );
}

export default App;