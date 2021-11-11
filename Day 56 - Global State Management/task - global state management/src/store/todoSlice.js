import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
    {
        id: uuidv4(),
        title: "Mengerjakan Exercise",
        isComplete: true,
    },
    {
        id: uuidv4(),
        title: "Mengerjakan Assignment",
        isComplete: false,
    },
];

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos];
            // setTodos(newTodos);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
            // setTodos(removeArr);
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            });
            // setTodos(updatedTodos);
        },
    },
});
export const { removeTodo, addTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
