import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { increment, decrement } from './counterSlice';

const Counter = () => {
    // Get the current count from Redux store
    // 1. useSelector hook - Gets data from the Redux store
    // - Takes a selector function that receives the entire Redux state
    // - Returns the specific piece of state we're interested in (counter.value)
    // - Automatically re-renders the component when this value changes
    const count = useSelector((state: RootState) => state.counter.value);

    // 2. useDispatch hook - Gets the dispatch function to send actions to the store
    // - Returns a reference to the dispatch function from the Redux store
    // - Used to dispatch actions that will trigger state updates
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>Count: {count}</h1>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    );
};

export default Counter;
