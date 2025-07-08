import "../index.css";

export default function TodoCard(props) {
  // This component represents a single todo item
  // It receives children as props, which will be the content of the todo
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <div className="todo-card">
      <li className="todoItem">
        <div className="">{children}</div>
        <div className="actionsContainer">
          <button
            onClick={() => {
              handleEditTodo(index);
            }}
            className="editButton"
          >
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
    </div>
  );
}
