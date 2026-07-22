import React from 'react';

function Cartsummary(props) {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
        Cart Summary
      </h2>

      {props.cartitems.length > 0 ? (
        <>
          <ul className="space-y-3">
            {props.cartitems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
              >
                <span className="font-medium text-gray-700">
                  {item.name}
                </span>
                <span className="font-bold text-green-600">
                  ₹{item.price}
                </span>
              </li>
            ))}
          </ul>

          {props.cartitems.length >= 3 && (
            <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300">
              Checkout Now
            </button>
          )}
        </>
      ) : (
        <p className="text-center text-red-500 font-medium">
          Cart is empty
        </p>
      )}
    </div>
  );
}

export default Cartsummary;