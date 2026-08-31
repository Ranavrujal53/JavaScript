import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddProduct = () => {
    const product = {
      id: Date.now(),
      name: "Premium Laptop",
      price: 50000,
    };
    dispatch(addToCart(product));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
          🛒 <span className="text-blue-500">Shopping Cart</span>
        </h1>

        <div className="flex gap-4 mb-10">
          <button
            onClick={handleAddProduct}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300"
          >
            Add Laptop
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300"
          >
            Clear Cart
          </button>
        </div>

        <h2 className="text-2xl font-semibold border-b border-gray-800 pb-3 mb-6">
          Cart Items ({cart.length})
        </h2>

        {cart.length === 0 ? (
          <div className="bg-gray-900 rounded-xl p-10 text-center border border-gray-800">
            <p className="text-gray-400 text-lg">Your cart is currently empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 flex justify-between items-center transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <button
                  onClick={() => handleRemoveProduct(item.id)}
                  className="text-red-400 hover:text-red-300 hover:bg-red-400/10 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;