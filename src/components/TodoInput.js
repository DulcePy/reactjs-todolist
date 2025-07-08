import React from "react"; // Import React to use JSX
import "../index.css";
export default function TodoInput(props) {
  // This component is responsible for taking user input for new todos
  const { handleAddTodos, todoValue, setTodoValue } = props; // Destructure the props to get the function and state needed

  return (
    <header>
      <div className="">
        <h1 className="todo-header">ToDo List</h1>
      </div>
      <div className="add-form">
        <input
          value={todoValue}
          onChange={(e) => {
            // Update the state with the input value
            setTodoValue(e.target.value);
          }}
          className="todo-input"
          placeholder="Enter todo"
        />
        <button
          onClick={() => {
            handleAddTodos(todoValue); // Call the function to add the todo
            setTodoValue(""); // Clear input after adding
          }}
          className="add-button"
          title="Add Todo"
        >
          Add
        </button>
      </div>
    </header>
  );
}
