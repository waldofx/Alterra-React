import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: uuidv4(),
            text: input
        });

        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Add todo...'
            value={input}
            name="text" 
            className='todo-input'
            onChange={handleChange}
            required
            />
            <button className="todo-button">Submit</button>
        </form>
    )
}

export default TodoForm;
