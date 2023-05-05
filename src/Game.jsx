import { useState } from "react";

export const Game = () => {
  const [changeCount, setChangeCount] = useState(4);

  const handleClick = () => {
    setChangeCount((changeCount) => changeCount - 1);
  };

  return (
    <div>
      <h1>Game</h1>
      <h2>Current Lives: {changeCount}</h2>
      <button disabled={changeCount === 0} onClick={handleClick}>
        Lose a Chance
      </button>
      {changeCount === 0 && (
        <h1 style={{ color: "orange" }}>"oops! Game Over"</h1>
      )}
    </div>
  );
};
// here i have added "disabled", to stop the function after it reaches 0.
