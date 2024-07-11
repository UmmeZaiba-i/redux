import { createStore } from 'redux';
import { INCREMENT, DECREMENT, CounterActionTypes } from './actiontypes';

// State
type CounterState = {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};

const reducer = (state = initialState, action:CounterActionTypes): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count+1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count-1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
