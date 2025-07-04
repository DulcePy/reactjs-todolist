import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // State to hold the list of todos
  // Initialized with two example todos
  // This state will be updated when new todos are added
  // The todos are stored as an array of strings

  const [todos, setTodos] = useState(["Go to the supermarket", "Buy milk"]);

  // Function to handle adding new todos
  function handleAddTodos(newTodo) {
    // Create a new array by spreading the existing todos and adding the new todo
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
      {/* The TodoInput component is responsible for taking user input and adding new todos */}
      {/* The TodoList component displays the list of todos */}
    </main>
  );
}

export default App;
