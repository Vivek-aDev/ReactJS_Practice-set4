import { useState } from "react";

export const BooksList = ({ books }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredBooks = selectedGenre
    ? books.filter(({ genre }) => genre === selectedGenre)
    : books;

  return (
    <div>
      <h2>Book List</h2>
      <button onClick={() => handleGenreChange(null)}>All Genres</button>
      <button onClick={() => handleGenreChange("Classic")}>Classic</button>
      <button onClick={() => handleGenreChange("Dystopian")}>Dystopian</button>
      <button onClick={() => handleGenreChange("Young Adult")}>
        Young Adult
      </button>
      <ul>
        {filteredBooks.map(({ id, title, author, genre }) => (
          <div
            key={id}
            style={{
              color:
                genre === "Classic"
                  ? "blue"
                  : genre === "Dystopian"
                  ? "green"
                  : genre === "Young Adult"
                  ? "red"
                  : "black"
            }}
          >
            <h3>{title}</h3>
            <p>{author}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
