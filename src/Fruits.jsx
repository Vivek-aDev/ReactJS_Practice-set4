import { useState } from "react";

export const Fruits = ({ itemList }) => {
  const [filter, setFilter] = useState(null);

  const getTextColor = (category) => {
    return category === "Fruit" ? "Orange" : "Green";
  };

  const filteredItems = filter
    ? itemList.filter((item) => item.category === filter)
    : itemList;

  return (
    <div>
      <button onClick={() => setFilter(null)}>All</button>
      <button onClick={() => setFilter("Fruit")}>Fruits</button>
      <button onClick={() => setFilter("Vegetable")}>Vegetables</button>
      <ul>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id} style={{ color: getTextColor(item.category) }}>
              {item.name}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
