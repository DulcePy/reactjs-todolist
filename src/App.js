import { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import AlertModal from "./components/AlertModal";

function App() {
  // State to hold the list of todos
  // This state will be updated when new todos are added
  // The todos are stored as an array of strings

  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [alert, setAlert] = useState({ isOpen: false, message: "" });

  // Function to show an alert message
  function showAlert(msg) {
    setAlert({ isOpen: true, message: msg });
    setTimeout(() => setAlert({ isOpen: false, message: "" }), 2000);
  }

  // Function to persist the todo list to localStorage
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  // Function to handle adding new todos
  function handleAddTodos(newTodo) {
    if (newTodo.trim() === "") {
      showAlert("Please enter a valid todo item.");
      return;
    }
    // Create a new array by spreading the existing todos and adding the new todo
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList); // Persist the new todo list to localStorage
    setTodos(newTodoList);
    showAlert("Todo added successfully!"); 
  }

  function handleDeleteTodo(index) {
    // This function will handle deleting a todo item
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
    showAlert("Todo deleted successfully!");
  }

  function handleEditTodo(index) {
    // This function will handle editing a todo item
    const valueTobeEdited = todos[index];
    setTodoValue(valueTobeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

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
      <AlertModal
        isOpen={alert.isOpen}
        message={alert.message}
        onClose={() => setAlert({ isOpen: false, message: "" })}
      />
    </main>
  );
}

export default App;
