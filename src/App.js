import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // State to hold the list of todos
  // Initialized with two example todos
  // This state will be updated when new todos are added
  // The todos are stored as an array of strings

  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState(""); // State to hold the input value

  // Function to handle adding new todos
  function handleAddTodos(newTodo) {
    // Create a new array by spreading the existing todos and adding the new todo
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(todoIndex) {
    // This function will handle deleting a todo item
    const newTodoList = todos.filter((todo, toDoIndex) => {
      return toDoIndex !== todoIndex;
    });

    setTodos(newTodoList);
  }

  function handleEditTodo(todoIndex) {
    // This function will handle editing a todo item
    const valueTobeEdited = todos[todoIndex];
    setTodoValue(valueTobeEdited);
    handleDeleteTodo(todoIndex);
  }

  return (
    <main>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </main>
  );
}

export default App;
