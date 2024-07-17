import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from "../store/actiontypes"

const TodoList: React.FC = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state: any) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(text));
        setText('');
        console.log(text)
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo: any, index: number) => (
                    <li
                        key={index}
                        onClick={() => dispatch(toggleTodo(index))}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
