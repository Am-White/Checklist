import React, {useState} from 'react';
//import Todos from '../components/todos';
import Form from '../components/form';
import Box from '@chakra-ui/react'

//display
const Home = () => {
    const [todos, setTodos] = useState([]);

    return (
    <div className="App">
        <Form 
            onSubmit = {todoText => setTodos([{ todoText, complete: false}, ...todos])}
        />
        <div>
            {todos.map(({ todoText }) => (
            <div key={todoText}>{todoText}</div>
            ))}
        </div>
    </div>
    )
}

export default Home;
