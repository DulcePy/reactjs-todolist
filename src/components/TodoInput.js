import React, { use } from "react";

export default function TodoInput(props) {
  // This component is responsible for taking user input for new todos
  const { handleAddTodos } = props; // Destructure the function from props
  const [todoValue, setTodoValue] = useState(""); // State to hold the input value

  return (
    <header>
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
      >
        Add
      </button>
    </header>
  );
}
