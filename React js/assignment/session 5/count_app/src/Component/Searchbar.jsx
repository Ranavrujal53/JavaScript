import React, { useState } from 'react'

function Searchbar() {

    const [search, setsearch] = useState("");

    const handlechnage = (event) => {
        setsearch(event.target.value);
    };
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Product Search
      </h2>
    <input type="text" placeholder='Search for products, brands and more...' value={search} onChange={handlechnage} className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<div className="mt-4 text-lg">
    <strong>Current search:</strong> {search}
</div>
      
    </div>
  );
}

export default Searchbar
