import React from 'react'

function DealsPage() {
  const deals = [
    { id: 1, title: "50% Off Electronics", price: "₹999" },
    { id: 2, title: "Buy 1 Get 1 Free", price: "₹499" },
    { id: 3, title: "Special Weekend Offer", price: "₹799" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
        🔥 Today's Best Deals
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3">
              {deal.title}
            </h2>

            <p className="text-2xl font-bold text-green-600 mb-4">
              {deal.price}
            </p>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">
              Grab Deal
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DealsPage