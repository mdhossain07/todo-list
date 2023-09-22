import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";

function App() {
  const inputStyle = {
    height: "30px",
    width: "400px",
  };

  const [items, setItems] = useState("");
  const [lists, setLists] = useState([]);

  const handleItems = (e) => {
    setItems(e.target.value);
  };

  const handleLists = () => {
    setLists([...lists, items]);
    setItems("");
  };

  const handleRemove = (list) => {
    const newLists = lists.filter((myList) => myList !== list);
    setLists(newLists);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <input
          style={inputStyle}
          type="text"
          value={items}
          onChange={handleItems}
        />
        <button onClick={handleLists}>Add</button>

        <div>
          {lists.map((list, index) => (
            <ToDo key={index} handleRemove={handleRemove} list={list}></ToDo>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
