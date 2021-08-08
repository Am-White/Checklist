import Todo from '../todo';
import React, { useState } from 'react';

//list of what needs to be done + delete button + checkbox
const Todos = () => {
    const todoState = useState(["do this"])
    return  (
    <div className="App">
        <Todo/>
        <Todo/>
        <Todo/>
    </div>
    )
}

export default Todos;
