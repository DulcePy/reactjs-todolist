import React from "react";

export default function TodoCard(props) {
    // This component represents a single todo item
    // It receives children as props, which will be the content of the todo
  const { children } = props; 
  return (
    <li className="todoItem">
      {children} 
      <div className="actionsContainer"> 
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
}
