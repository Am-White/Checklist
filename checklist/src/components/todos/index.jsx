import Todo from "../form";
import React, { useState } from "react";
import {
  Checkbox,
  Container,
  IconButton,
  SimpleGrid,
  Box,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

//list of what needs to be done + delete button + checkbox
const Todos = ({todos, toggleComplete}) => {
  //const todoState = useState(["do this"])
  return (
    <div className="App">

      <div>
            {todos.map(({ todoText, complete }, i) => (
              <div
                key={i}
               
                style={{
                  backgroundColor: "lightblue",
                  fontSize: "20px",
                  textAlign: "center",

                  textDecoration: complete ? "line-through" : "",
                }}
              >
                <Checkbox onChange={() => toggleComplete(i)}> </Checkbox>
            
                {todoText}
                <IconButton
                  boxSize="1rem"
                  aria-label="Search database"
                  icon={<DeleteIcon />}
                />
              </div>
            ))}
          </div>
    </div>
  );
};

export default Todos;
