import React, { useState } from 'react';
// import { useState, useEffect } from 'react';

export default function Todolist() {
    // OR if you import useState from react
    // const [description, setDescription] = useState('');


    const [todo, setTodo] = React.useState({
        description: '',
        date: ''
      })

    const [todos, setTodos] = React.useState([]);

    const handleAddTodo = (event) => {
        event.preventDefault(); // Because I'm using HRML form
        setTodos([todo, ...todos]);
        setTodo({description: '', date: ''});
    };

    return (
        <div>
            <h1>Simple TodoList</h1>
            <h3>Add a new todo</h3>
            <form title="Add todo">
                <label>Description</label>
                <input
                    type="text"
                    placeholder='Laundry'
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value})}
                />
                <label>Date</label>
                <input
                    type="date"
                    value={todo.date}
                    onChange={e => setTodo({ ...todo, date: e.target.value})}
                />
                <button onClick={handleAddTodo}>Add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.description}</td>
                                <td>{todo.date}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}


// OR
//export default Todolist;