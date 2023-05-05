import { useState } from "react";

export const FontSizeChanger = () => {
  const [fontSize, setFontSize] = useState(26);

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };
  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 1);
  };
  return (
    <div>
      <h2 style={{ fontSize: `${fontSize}px` }}>Welcome</h2>
      <button onClick={increaseFontSize}>+</button>
      <button onClick={decreaseFontSize}>-</button>
    </div>
  );
};
