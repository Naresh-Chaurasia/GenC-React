// Button Click
//    ↓
// Action Creator
//    ↓
// dispatch(action)
//    ↓
// reducer
//    ↓
// new state
//    ↓
// subscribe()
//    ↓
// UI update



// Get the Redux library from the browser window
// Redux was loaded via CDN in index.html
const redux = window.Redux;

// -----------------------------
// INITIAL APPLICATION STATE
// -----------------------------
// This is the default state of the application
// Redux will use this state when the app starts
const initialState = {
    count: 0   // counter value starts at 0
};

// -----------------------------
// REDUCER FUNCTION
// -----------------------------
// The reducer is a pure function that:
// 1. Receives the current state
// 2. Receives an action object. It has type property
// 3. Returns a NEW state based on action.type
//
// IMPORTANT:
// - Reducer must NOT modify the existing state
// - It must always return a new object
function reducer(state = initialState, action) {

    // Decide what to do based on action type
    switch (action.type) {

        // If action type is "INCREMENT"
        case "INCREMENT":
            // Return a NEW state object
            // Increase count by 1
            return {
                count: state.count + 1
            };

        // If action type is "DECREMENT"
        case "DECREMENT":
            // Return a NEW state object
            // Decrease count by 1
            return {
                count: state.count - 1
            };

        // If action type does not match any case
        default:
            // Return the current state unchanged
            return state;
    }
}

// -----------------------------
// CREATE REDUX STORE
// -----------------------------
// The store:
// - Holds the application state
// - Uses the reducer to update state
// - Allows dispatching actions
const store = redux.createStore(reducer);

// -----------------------------
// SUBSCRIBE TO STATE CHANGES
// -----------------------------
// This function runs EVERY time the state changes
// It is commonly used to update the UI
store.subscribe(() => {

    // Get the latest state from Redux store
    const currentState = store.getState();

    // Update the HTML to show latest count value
    document.getElementById("count").innerText =
        "Count: " + currentState.count;
});

// -----------------------------
// ACTION DISPATCH FUNCTIONS
// -----------------------------
// These functions are called when buttons are clicked

// Dispatch an INCREMENT action
function increment() {
    // Sends action object to Redux
    store.dispatch({ type: "INCREMENT" });
}

// Dispatch a DECREMENT action
function decrement() {
    // Sends action object to Redux
    store.dispatch({ type: "DECREMENT" });
}


// store.dispatch({ type: "INCREMENT" }) / store.dispatch(action). This method belongs to the Redux store.

// Store forwards action to reducer. currentState = reducer(currentState, action);
// Redux already knows which reducer to use
// You passed the reducer earlier when you created the store