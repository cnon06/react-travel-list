export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;

  if (!numItems)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list. 🚀</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 🧳 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${Math.round(percentage)}%)`}
      </em>
    </footer>
  );
}
