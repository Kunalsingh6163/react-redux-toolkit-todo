'use client'
import AddTodo from "./components/addtodo/AddTodo";
import Todos from "./components/Todos/Todos";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AddTodo />
      <Todos />
    </div>
  );
}
