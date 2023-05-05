import { useState } from "react";

export const TodoList = ({ todoItems }) => {
  const [items, setItems] = useState(todoItems);

  const handleDelete = (id) => {
    const updateItemId = items.filter((item) => item.id !== id);
    setItems(updateItemId);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              textDecoration: item.isDone === true ? "line-through" : null
            }}
          >
            {item.task}{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
