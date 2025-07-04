import React from "react";

export default function TodoCard(props) {
  // This component represents a single todo item
  // It receives children as props, which will be the content of the todo
  const { children, handleDeleteTodo, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button className="editButton">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button
          onClick={() => {
            handleDeleteTodo(index); // Call the function to delete the todo
          }}
          className="deleteButton"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
