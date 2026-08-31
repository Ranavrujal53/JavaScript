import React, { useState } from 'react';

function ProductList() {
  const [products] = useState(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (index + 1) * 100,
    }));
  });

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-cyan-500/30">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 sm:text-5xl">
            Premium Collection
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Explore our massive catalog of high-quality items, engineered for excellence.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgb(6,182,212,0.15)]"
            >
              {/* Subtle background glow effect on hover */}
              <div className="pointer-events-none absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 blur-xl transition duration-500 group-hover:opacity-10"></div>

              {/* Card Top / Tags */}
              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/20 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 text-sm font-bold text-cyan-400">
                    #{product.id}
                  </div>
                  <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                    In Stock
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-100 transition-colors group-hover:text-cyan-300">
                  {product.name}
                </h3>
              </div>

              {/* Card Bottom / Price & Action */}
              <div className="relative z-10 mt-8 flex items-end justify-between">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    Price
                  </p>
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                </div>
                
                {/* Cart Button */}
                <button className="flex h-10 w-10 transform items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;