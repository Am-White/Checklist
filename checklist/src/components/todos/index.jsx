import Todo from "../form";
import React, { useState } from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

//list of what needs to be done + delete button 
const Todos = ({todos, toggleComplete,}) => {
  //const todoState = useState(["do this"])

  // const [todo, setTodo] = useState([])

  // const handleDelete = e => {
  //   const {id} = e.target.parentElement;
  //   todo.splice(id, 0)
  //   setTodo([...todo]);
    
  // };
  
  return (
    <div className="App" 
      style={{maxHeight:"400px"}}>

      <List>
            {todos.map(({ todoText, complete }, i) => (
              <ListItem
                key={i}
               
                style={{
                  backgroundColor: "lightblue",
                  fontSize: "20px",
                  textAlign: "center",

                  textDecoration: complete ? "line-through" : "",
                }}
              >
                <Checkbox onChange={() => toggleComplete(i)}> </Checkbox>
            
                {todoText }
                
                <IconButton
                  // onClick={handleDelete}
                  boxSize="1rem"
                  aria-label="Search database"
                  icon={<DeleteIcon />}
                />
              </ListItem>
            ))}
          </List>
    </div>
  );
};

export default Todos;
