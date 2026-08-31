import React from "react";
import useFetchData from "../hook/useFetchData";

function FlipkartProductList() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return (
      <h2 className="text-center text-2xl font-bold text-blue-600 mt-10">
        Loading...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-center text-2xl font-bold text-red-600 mt-10">
        Error: {error}
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Flipkart Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4"
            />

            <h2 className="text-lg font-semibold mb-2 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-green-600 font-bold text-xl">
              ₹{Math.round(product.price * 85)}
            </p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlipkartProductList;