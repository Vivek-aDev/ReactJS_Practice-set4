import { useState } from "react";

export const TodoListQfive = ({ secondTodoItems }) => {
  const [items, setItems] = useState(secondTodoItems);

  const toggleDone = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone
        };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {items.map((item) => (
        <p
          key={item.id}
          style={{
            textDecoration: item.isDone ? "line-through" : null,
            color: item.isDone ? "red" : null
          }}
        >
          {item.task}{" "}
          <button onClick={() => toggleDone(item.id)}>Mark as Done</button>{" "}
        </p>
      ))}
    </div>
  );
};
