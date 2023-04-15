import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newText = event.target.value;
    setText(newText);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
