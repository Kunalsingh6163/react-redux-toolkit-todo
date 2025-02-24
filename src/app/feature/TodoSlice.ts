import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
}

interface TodoState {
  todos: Todo[];
}

// Define the initial state with types
const initialState: TodoState = {
  todos: [{ id: "1", text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: Todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
