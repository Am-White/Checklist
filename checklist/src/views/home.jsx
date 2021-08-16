import React, { useState } from "react";
import Todos from '../components/todos';
import Form from "../components/form";
import {
  Checkbox,
  Container,
  IconButton,
  SimpleGrid,
  Box,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

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
      <Container>My Todo List:</Container>

      <SimpleGrid columns={[2, null, 2]} spacing="40px">
        <Box>
          <Form
            onSubmit={(todoText) =>
              setTodos([{ todoText, complete: false }, ...todos])
            }
          />
        </Box>

        <Box>
        <Todos todos = {todos} toggleComplete = {toggleComplete}/>

        </Box>
        <Button
          onClick={() => setTodos([])}
          colorScheme="teal"
          variant="outline"
        >
          Clear All
        </Button>
      </SimpleGrid>
    </div>
  );
};

export default Home;
