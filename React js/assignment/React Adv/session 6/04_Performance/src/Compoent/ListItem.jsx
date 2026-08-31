import React from "react";

function ListItem({ item, onToggle }) {
  console.log("ListItem rendered:", item.id);

  return (
    <div className="mb-2 flex items-center justify-between rounded-lg bg-white p-4 shadow">
      <span className="font-medium text-gray-800">
        {item.name}
      </span>

      <button
        onClick={() => onToggle(item.id)}
        className={`rounded-lg px-4 py-2 font-medium ${
          item.selected
            ? "bg-green-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {item.selected ? "Selected" : "Select"}
      </button>
    </div>
  );
}

export default React.memo(ListItem);