import { createStore, combineReducers } from 'redux';
import { INCREMENT, DECREMENT, CounterActionTypes, ADD_TODO, TOGGLE_TODO } from './actiontypes';

// types
type CounterState = {
  count: number;
}
// type Todos = {
//   text: string[];
//   completed: boolean;
// }
const todoInitialState: never[] = [];

// State
const counterInitialState: CounterState = {
  count: 0,
};
// const todoInitialState: TodoState =[];



// counter reducer
const counterReducer = (state = counterInitialState, action: CounterActionTypes): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
const todoReducer = (state = todoInitialState, action:any)=>{
  switch(action.type){
    case ADD_TODO:
      return [
       ...state,
       {text: action.payload.text, completed:false}
      ];
    case TOGGLE_TODO:
      return state.map((todo: { completed: any; }, index: any)=>
        index === action.payload.index
      ?{...todo, completed:!todo.completed}
      :todo
      );
      default: return state;
  }
}


const rootReducer = combineReducers({
  counter: counterReducer,
  todos : todoReducer,
});

const store = createStore(rootReducer);

export default store;
