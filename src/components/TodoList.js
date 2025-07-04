import React from "react";

export default function TodoList() {
  let todos = [
    "Go to the supermarket",
    "Buy milk",
    "Walk the dog",
    "Finish homework",
    "Read a book",
    "Call mom",
  ];

  return (
    <ul className="todoList">
      {/* This is where the list of todos will be displayed */}
      {todos.map((todo, todoIndex) => {
        return (
          <li className="todoItem" key={todoIndex}>
            {todo}
            <i className="fa-solid fa-pen-to-square"></i>
          </li>
        );
      })}
    </ul>
  );
}
