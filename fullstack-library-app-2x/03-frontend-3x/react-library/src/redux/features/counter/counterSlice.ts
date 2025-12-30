import { createSlice } from '@reduxjs/toolkit';

/**
 * A Redux 'slice' is a collection of Redux logic for a single feature.
 * It contains the reducer logic and actions together in one file.
 * This makes it easier to manage related state updates in one place.
 */

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        // Reducers are pure functions that take the current state and return a new state
        // They describe how the state should change in response to an action
        increment: (state) => { state.value += 1 },  // When 'increment' action is dispatched, increase value by 1
        decrement: (state) => { state.value -= 1 }   // When 'decrement' action is dispatched, decrease value by 1
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
