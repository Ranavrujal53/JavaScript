import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductList() {
  const { dispatch } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      emoji: "💻", // Added a quick emoji for the placeholder image
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      emoji: "📱",
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      emoji: "🎧",
    },
  ];

  return (
    // Outer wrapper for centering and padding
    <div className="max-w-6xl mx-auto mt-10 px-4 pb-12">
      
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Featured Products
        </h2>
        <p className="text-gray-500 mt-2 font-medium">
          Upgrade your tech with our premium selection.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          
          // Individual Product Card
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            
            {/* Image Placeholder Area */}
            <div className="h-56 bg-gradient-to-br from-indigo-50 to-purple-50 border-b border-gray-100 flex items-center justify-center text-7xl">
              {product.emoji}
            </div>

            {/* Product Info Area */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>
              
              {/* Formatted Price */}
              <p className="text-2xl font-black text-gray-900 mt-2 mb-6">
                ₹{product.price.toLocaleString('en-IN')}
              </p>

              {/* Action Button pinned to the bottom */}
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }
                className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add To Cart
              </button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default ProductList;