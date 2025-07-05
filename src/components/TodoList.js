import TodoCard from "./TodoCard";

export default function TodoList(props) {
  // This component is responsible for displaying the list of todos
  const { todos } = props; // Destructure the todos from props

  return (
    <ul className="mainList">
      {todos.map((todo, todoIndex) => {
        // Map through the todos array and create a TodoCard for each todo
        // The todoIndex is used as a key for each TodoCard
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
