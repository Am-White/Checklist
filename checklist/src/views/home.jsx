import React, {useState} from 'react';
//import Todos from '../components/todos';
import Form from '../components/form';
import Box from '@chakra-ui/react'

//display
const Home = () => {
    const [todos, setTodos] = useState([]);

    const toggleComplete = i => setTodos(todos.map((todo, k) => k === i ? {
        ...todo,
        complete: !todo.complete
    } : todo
    ));


    return (
    <div className="App">
        <Form 
            onSubmit = {todoText => setTodos([{ todoText, complete: false}, ...todos])}
        />
        <div>
            {todos.map(({ todoText, complete }, i) => (
            <div key={todoText} onClick={()=> toggleComplete(i)}
            style={{
                textDecoration: complete ? "line-through" : ""
            }}>
                {todoText}</div>
            ))}
        </div>
    </div>
    )
}

export default Home;
