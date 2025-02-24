"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../feature/TodoSlice";
import type { AppDispatch } from "../../store"; // Import AppDispatch type

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch<AppDispatch>(); // Typed useDispatch

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent empty todos

    console.log("Add Todo Button Clicked");
    dispatch(addTodo(input.trim())); // Trim spaces before dispatch
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          name="title"
          placeholder="Enter Todo Title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ border: "2px solid black" }}
        />
        <button
          type="submit"
          className="text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
