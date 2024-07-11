export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

type IncrementAction = {
    type: typeof INCREMENT;
}
type DecrementAction = {
    type: typeof DECREMENT;
}

export type CounterActionTypes = IncrementAction | DecrementAction;