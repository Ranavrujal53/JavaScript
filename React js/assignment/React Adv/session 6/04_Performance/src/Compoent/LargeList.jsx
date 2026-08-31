import React, { useCallback, useMemo, useState } from "react";
import ListItem from "./ListItem";

function LargeList() {
  const [items, setItems] = useState(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
      selected: false,
    }));
  });

  const [count, setCount] = useState(0);

  // useMemo
  const largeList = useMemo(() => {
    console.log("Large list calculated");

    return items;
  }, [items]);

  // useCallback
  const handleToggle = useCallback((id) => {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              selected: !item.selected,
            }
          : item
      )
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Large List Performance
      </h1>

      <div className="mb-6 text-center">
        <button
          onClick={() => setCount((previous) => previous + 1)}
          className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
        >
          Click Me: {count}
        </button>
      </div>

      <div className="mx-auto max-w-2xl">
        {largeList.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default LargeList;