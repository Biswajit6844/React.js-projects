import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  Container
} from "reactstrap";



import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo");
    }

    const todo = {
      todoString,
      id: v4()
    };
    dispatch({
      type: ADD_TODO,
      payload: todo
    });

    setTodoString("");
  };

  return (
    
    <Form onSubmit={handleSubmit}>
    <FormGroup>
      <InputGroup>
        <Input
          type="text"
          name="todo"
          id="todo"
          placeholder="Your next Todo"
          value={todoString}
          onChange={e => setTodoString(e.target.value)}
        />
        
          <Button
            color="warning"
            //TODO: onclick
          >
            Add
          </Button>
        
      </InputGroup>
    </FormGroup>
  </Form>

  
   
  );
};

export default TodoForm;


//4. a)importing components
//4.b)designing a  dispatch-->>> const { dispatch } = useContext(TodoContext);
//4.c)firing  a  dispatch by onclick method---->const handleSubmit = e => {
 //   e.preventDefault();
 //   if (todoString === "") {
  //    return alert("Please enter a todo");
   // }

   //5.move to todo.js
