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

  // useMemo to filter products
  const productList = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12 font-sans text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold text-blue-400 shadow-md">
            ⚡ Premium Collection
          </div>

          <h1 className="mb-3 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
            Product Inventory
          </h1>

          <p className="mx-auto max-w-2xl text-base font-medium text-slate-600">
            Explore high-quality catalog items presented in a modern,
            dual-contrast layout.
          </p>
        </header>

        {/* --- PREMIUM SEARCH SECTION --- */}
        <div className="mx-auto mb-12 max-w-2xl relative">
          {/* Subtle animated background glow behind the input when focused */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 blur transition duration-500 group-focus-within:opacity-25" />

          {/* Search Bar Container */}
          <div className="group relative flex items-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md focus-within:shadow-lg focus-within:shadow-blue-500/20 focus-within:ring-2 focus-within:ring-blue-600">
            
            {/* Search Icon */}
            <div className="pointer-events-none absolute left-5 flex items-center justify-center text-slate-400 transition-colors group-focus-within:text-blue-600">
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search product inventory..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent py-4 pl-14 pr-14 text-lg font-medium text-slate-900 placeholder:text-slate-400 outline-none"
            />

            {/* Clear Text Button (Only shows when typing) */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-slate-200 hover:text-slate-900 active:scale-90"
                aria-label="Clear search"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Search Stats */}
          <div className="mt-4 flex items-center justify-center space-x-2 text-sm font-medium text-slate-500">
            <span>Showing</span>
            <span className="rounded bg-blue-100 px-2 py-0.5 font-bold text-blue-700">
              {productList.length}
            </span>
            <span>of {products.length} products</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productList.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Product Information */}
              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between">
                  {/* Product ID */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-blue-400 shadow-md shadow-slate-900/10 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    #{product.id}
                  </div>

                  {/* Stock */}
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                    In Stock
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-500">
                  Official Trading Item
                </p>
              </div>

              {/* Price & Action Button */}
              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Price
                  </p>

                  <p className="text-xl font-black text-slate-900">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Action Button */}
                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found State */}
        {productList.length === 0 && (
          <div className="mt-10 flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-sm border border-slate-200">
            <div className="mb-4 rounded-full bg-slate-100 p-4">
              <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-bold text-slate-900">No products found</h3>
            <p className="text-slate-500">We couldn't find anything matching "{searchTerm}".</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-6 font-bold text-blue-600 hover:text-blue-700"
            >
              Clear search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProductList;