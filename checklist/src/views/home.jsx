import React, { useState } from "react";
import Todos from '../components/todos';
import Form from "../components/form";
import {
  Container,
  SimpleGrid,
  Box,
  Button,
} from "@chakra-ui/react";

//display
const Home = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) =>
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );
            console.log(todos);

  return (
    <div className="App">
      <Container className="header">My Todo List:</Container>

      <SimpleGrid columns={[2, null, 2]} spacing="40px">
        <Box>
          <Form
            onSubmit={(todoText) =>
              setTodos([{ todoText, complete: false }, ...todos])
            }
          />
        </Box>
        

        <Box>
          
        <Todos 
        placeholder="Todos show here"
        todos = {todos} 
        toggleComplete = {toggleComplete}/>
        
        <Button
          onClick={() => setTodos([])}
          colorScheme="teal"
          variant="outline"
          width="100%"
        >
          Clear All
        </Button>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Home;
