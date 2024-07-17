// src/components/Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { INCREMENT, DECREMENT } from '../store/actiontypes';

const Counter: React.FC = () => {
    // used to select data from the redux store
    
    // since i have used multiple reducers here i need to use state.counter.count
    const count = useSelector((state: {counter : { count: number }}) => state.counter.count);

    // used to dispatch the action inside the store to create a new state
    const dispatch = useDispatch();

    return (
        <div>
            <br /> <br />
            {/* subscribes the redux store and automatically renders the component where it is needed */}
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
        </div>
    );
};

export default Counter;