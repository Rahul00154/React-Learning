import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello",
    },
  ],
};

//properties and method came in reducer
// in create we pass first name then initialstate
//in context api we not wirte function definition while passing
//but in reduxtoolkit we write function definition first then pass it to where it used

//in addtodo or any method in reducer it give two param like state and action

/* 

  reducer : {
    state always give present situation of initialstate
    in action action give id
    addtodo:(state,action)=>{

    }
  }
*/

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducer: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo:(state,action)=>{

    // }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
