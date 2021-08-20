import {  Input } from "@chakra-ui/react";
//Enter new task to add to the todo
import React, { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};

const Form = ({ onSubmit }) => {
  const { resetValue, ...todoText } = useInputValue("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(todoText.value);
        resetValue();
      }}
    >
      <Input
        {...todoText}
        placeholder="Add todo here..."
        margin="normal"
        variant="filled"
        height="50px"
      />
    </form>
  );
};

export default Form;
