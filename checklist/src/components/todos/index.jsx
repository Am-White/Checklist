import Todo from "../form";
import React, { useState } from "react";
import {
  Checkbox
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

//list of what needs to be done + delete button 
const Todos = ({todos, toggleComplete, handleDelete}) => {
  
 // const todoState = useState(["do this"])

  return (
    <div className="App">

      <div>
            {todos.map(({ todoText, complete }, i) => (
              <div
                key={i}
               
                style={{
                  border: "solid black 1px",
                  opacity: "85%",
                  padding: "5px",
                  fontSize: "20px",
                  textDecoration: complete ? "line-through" : "",
                }}
              >
                <Checkbox 
                onChange={() => toggleComplete(i)} 
                isChecked={complete}
                float="left"> </Checkbox>
            
                {todoText }
                
                <DeleteIcon
                  onClick={() => handleDelete(i)}
                  float="right"
                  cursor="pointer"
                  aria-label="Search database"  
                />
              </div>
            ))}
          </div>
    </div>
  );
};

export default Todos;
