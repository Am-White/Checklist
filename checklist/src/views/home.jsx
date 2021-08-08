import React, {useState} from 'react';
//import Todos from '../components/todos';
import Form from '../components/form';
import { Checkbox, Container, IconButton, SimpleGrid, Box, Button} from "@chakra-ui/react"
import {DeleteIcon } from "@chakra-ui/icons"


//display
const Home = () => {
    const [todos, setTodos] = useState([]);

    const toggleComplete = i => setTodos(todos.map((todo, k) => k === i ? {
        ...todo,
        complete: !todo.complete
    } : todo
    ));


    return (
    <div className="App" >
        <Container>My Todo List:</Container>

        <SimpleGrid columns={[2, null, 2]} spacing="40px">
        <Box >
        <Form 
            onSubmit = {todoText => setTodos([{ todoText, complete: false}, ...todos])}
        />
        </Box>

        <Box >
        <div>
            {todos.map(({ todoText, complete }, i) => (
            <div 
            key={todoText} onClick={()=> toggleComplete(i)}
            style={{
                backgroundColor:'lightblue',
                fontSize: '20px',
                textAlign: "center",
               
                textDecoration: complete ? "line-through" : ""
            }}>
                <Checkbox > </Checkbox>
                {todoText} 
                <IconButton boxSize="1rem" aria-label="Search database" icon={<DeleteIcon />} />
                </div>
                
            ))}
        </div>
        </Box>
        <Button onClick={() => setTodos([])} colorScheme="teal" variant="outline">Clear All</Button>
        </SimpleGrid>
    </div>
    
    )
}

export default Home;
