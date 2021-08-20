import React, { useState } from "react";
import Todos from '../components/todos';
import Form from "../components/form";
import {
  Container,
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


  const handleDelete = (i) =>
  setTodos(
    todos.map((todo, k) =>
      k !== i
        ? todo
        : null
    ).filter(Boolean)
  );

  return (
    <div className="App" style={{margin:"auto", width:"700px"}}>
      <Container 
      textAlign="center"
      fontSize="30px"
      >My Todo List:</Container>

      
        <Box>
          <Form
            onSubmit={(todoText) =>
              setTodos([{ todoText, complete: false }, ...todos])
            }
          />

        <Box
        style={{
          height:"500px",
          backgroundColor:"tan",
          paddingTop:"20px"
        }}>

        <Todos 
        todos = {todos} 
        toggleComplete = {toggleComplete}
        handleDelete = {handleDelete}/>
        </Box>

        <Button
          onClick={() => setTodos([])}
          colorScheme="teal"
          variant="outline"
          width="100%"
        >
          Clear All
        </Button>
        </Box>
     
    </div>
  );
};

export default Home;
