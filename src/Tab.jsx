import { useState } from "react";
import "./styles.css";

export const Tab = ({ characters }) => {
  const [isHeroActive, setIsHeroActive] = useState(null);

  const handleHeroClick = () => {
    setIsHeroActive(true);
  };

  const handleVilliansClick = () => {
    setIsHeroActive(false);
  };

  return (
    <div>
      <h2>Tabs</h2>
      <div>
        <button onClick={handleHeroClick}>Show Heros</button>
        <button onClick={handleVilliansClick}>Show Villains</button>
      </div>
      {isHeroActive !== null && ( // Check if isHeroActive is not null
        <>
          {isHeroActive ? ( // If isHeroActive is true
            <ul>
              <h3>Heroes:</h3>
              {characters.heroes.map(({ name, powers, costume }) => (
                <>
                  <h3>{name}</h3>
                  <p>{powers}</p>
                  <p>{costume}</p>
                </>
              ))}
            </ul>
          ) : (
            // If isHeroActive is false
            <ul>
              <h3>Villains:</h3>
              {characters.villains.map(({ name, powers, costume }) => (
                <>
                  <h3>{name}</h3>
                  <p>{powers}</p>
                  <p>{costume}</p>
                </>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
