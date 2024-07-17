// add action constant
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// action function
type IncrementAction = {
    type: typeof INCREMENT;
}
type DecrementAction = {
    type: typeof DECREMENT;
}
type AddtodoAction = {
    type: typeof ADD_TODO;
    payload: {text:string|number};
}
type ToggletodoAction = {
    type : typeof TOGGLE_TODO;
    payload : {text:string|number};
}

export const addTodo = (text: string |number)=>({
    type : typeof ADD_TODO,
    payload: {text}, // here payload describes what is being updated and sometimes specifies what data s-is passed.
})

export const toggleTodo = (index:number)=>({
    type: typeof TOGGLE_TODO,
    payload: {index}
})



export type CounterActionTypes = IncrementAction | DecrementAction;
export type TodoActionTypes = AddtodoAction | ToggletodoAction;



