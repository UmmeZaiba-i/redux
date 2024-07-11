// src/components/Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { INCREMENT, DECREMENT } from '../store/actiontypes';

const Counter: React.FC = () => {
    // used to select data from the redux store
    const count = useSelector((state: { count: number }) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            {/* subscribes the redux store and automatically renders the component where it is needed */}
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
        </div>
    );
};

export default Counter;
