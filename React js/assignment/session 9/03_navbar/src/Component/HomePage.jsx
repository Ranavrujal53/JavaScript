import React from 'react'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Our Store
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Discover amazing deals and shop your favorite products.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default HomePage