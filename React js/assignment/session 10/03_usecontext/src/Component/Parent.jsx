import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Parent Component
      </h2>

      <div className="border-t pt-4">
        <Child />
      </div>
    </div>
  );
}

export default Parent;