import { useState } from "react";

export default function Form({ onAddedItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    onAddedItems(newItem);
    // handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <form onSubmit={handleSubmit} className="form-elements">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
          {/* <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option> */}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
