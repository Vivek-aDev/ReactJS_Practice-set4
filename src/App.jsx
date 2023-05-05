import { Fruits } from "./Fruits";
import { FontSizeChanger } from "./Header";
import "./styles.css";
import { Tab } from "./Tab";
import { TodoList } from "./TodoList";
import { TodoListQfive } from "./TodoListQfive";
import { BooksList } from "./BooksList";
import { Game } from "./Game";

export default function App() {
  return (
    <div className="App">
      <h1>ReactJS Practice Question Set 4</h1>
      <hr />
      <Tab characters={characters} />
      <hr />
      <FontSizeChanger />
      <hr />
      <Fruits itemList={itemList} />
      <hr />
      <TodoList todoItems={todoItems} />
      <hr />
      <TodoListQfive secondTodoItems={secondTodoItems} />
      <hr />
      <BooksList books={books} />
      <hr />
      <Game />
    </div>
  );
}
const characters = {
  heroes: [
    {
      name: "IRON MAN",
      powers: "Genius,Rich,IRON Suit",
      costume: "IRON MAN suit"
    },
    {
      name: "ANT MAN",
      powers: "Ant man suit",
      costume: "Ant man suit"
    },
    {
      name: "Spider-man",
      powers: "Reflexes,Speed,Spider-Sense",
      costume: "Spider Suit"
    },
    {
      name: "Bat man",
      powers: "Rich,Bat suit",
      costume: "Bat Suit"
    },
    {
      name: "Super-man",
      powers: "Superhuman strength,Reflexes,Speed",
      costume: "Superman  Suit"
    }
  ],
  villains: [
    {
      name: "Thanos",
      powers: "Superhuman strength,Reflexes,Speed,",
      costume: "Metal armor"
    },
    {
      name: "Venom",
      powers: "shapeshifting and camouflage Symbiotes autonomous defense",
      costume: "black suit"
    },
    {
      name: "Kang the conqueror",
      powers: "time travel, can access all tech",
      costume: "kang armor"
    },
    {
      name: "Joker",
      powers: "clownlike appearance and sick humour",
      costume: "Joker costume"
    }
  ]
};

const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" }
];

const todoItems = [
  { id: 1, task: "Writing 1-page poem", isDone: true },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: true }
];

const secondTodoItems = [
  { id: 1, task: "Writing 1-page poem", isDone: false },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: false }
];

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic"
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic"
  },
  { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 5,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian"
  },
  {
    id: 6,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult"
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Young Adult"
  }
];
