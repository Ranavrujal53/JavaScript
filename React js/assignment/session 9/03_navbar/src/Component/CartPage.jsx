import React from 'react'

function CartPage() {
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 999 },
    { id: 2, name: "Smart Watch", price: 1499 },
    { id: 3, name: "Bluetooth Speaker", price: 799 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
          🛒 Shopping Cart
        </h1>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <h2 className="text-lg font-medium">
                {item.name}
              </h2>

              <p className="text-green-600 font-bold">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Total
          </h2>

          <p className="text-2xl font-bold text-blue-600">
            ₹{total}
          </p>
        </div>

        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPage