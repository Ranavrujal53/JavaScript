import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  return (
    // Outer container to center the cart and add top margin
    <div className="max-w-3xl mx-auto mt-10 px-4 pb-10">
      
      {/* Main Cart Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Shopping Cart</h2>
            <p className="text-gray-500 text-sm mt-1 font-medium">
              {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>

        {/* Conditional Rendering based on Cart Status */}
        {cart.length === 0 ? (
          
          // Empty State UI
          <div className="p-12 flex flex-col items-center justify-center bg-gray-50/50">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-5 shadow-inner">
              <span className="text-3xl">🛒</span>
            </div>
            <p className="text-gray-500 text-lg font-medium">Your cart is currently empty.</p>
            <p className="text-gray-400 text-sm mt-1">Looks like you haven't added anything yet.</p>
          </div>

        ) : (
          
          // Filled Cart UI
          <>
            <ul className="divide-y divide-gray-100 p-6 md:p-8">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-5 first:pt-0 last:pb-0">
                  
                  <div className="flex items-center space-x-4">
                    {/* Placeholder Product Thumbnail */}
                    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-400 font-bold text-xl border border-indigo-100">
                      {item.name?.charAt(0).toUpperCase() || "P"}
                    </div>
                    
                    {/* Product Details */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                      <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mt-0.5">
                        Item ID: {item.id}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id,
                      })
                    }
                    className="text-red-600 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Footer / Clear Cart Action */}
            <div className="bg-gray-50 p-6 md:px-8 md:py-5 border-t border-gray-200 flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium hidden sm:block">
                Finished shopping?
              </span>
              
              <div className="flex w-full sm:w-auto space-x-4">
                <button
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                  className="w-full sm:w-auto text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Clear Cart
                </button>
                <button className="w-full sm:w-auto text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;