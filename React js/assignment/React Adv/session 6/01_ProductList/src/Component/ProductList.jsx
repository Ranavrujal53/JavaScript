import React, { useMemo, useState } from "react";

function ProductList() {
  const [products] = useState(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (index + 1) * 100,
    }));
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Filter products using useMemo
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
        Product List
      </h1>

      <p className="mb-6 text-center text-gray-600">
        Total Products: {products.length}
      </p>

      {/* Search Input */}
      <div className="mx-auto mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Result Count */}
      <p className="mb-4 text-center text-gray-700">
        Products Found: <strong>{filteredProducts.length}</strong>
      </p>

      {/* Product List */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>

            <p className="mt-2 font-medium text-green-600">
              Price: ₹{product.price}
            </p>
          </div>
        ))}
      </div>

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-red-500">
          No products found.
        </p>
      )}
    </div>
  );
}

export default ProductList;