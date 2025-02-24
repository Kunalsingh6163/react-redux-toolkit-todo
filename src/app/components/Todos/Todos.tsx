"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../feature/TodoSlice";
import type { RootState, AppDispatch } from "../../store";

function Todos() {
  const todos = useSelector((state: RootState) => state.todo.todos); // Correct state access
  const dispatch = useDispatch<AppDispatch>(); // Typed Dispatch

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Todo List</h1>
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos available</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 border rounded-md"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-800"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
