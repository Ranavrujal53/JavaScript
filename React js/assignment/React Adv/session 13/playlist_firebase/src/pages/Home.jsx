import React from "react";

function Home() {
  // Storing features in an array keeps the JSX clean and easy to update
  const features = [
    "Add Playlist",
    "Display Playlist",
    "Update Playlist",
    "Delete Playlist",
    "Delete Confirmation",
    "Real-Time Playlist Updates",
    "Live Comments Feed",
  ];

  return (
    <div className="max-w-3xl px-6 py-10 mx-auto mt-10 shadow-xl bg-slate-50 rounded-2xl text-slate-800">
      
      {/* =====================================
          HEADER SECTION
      ===================================== */}
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-700">
        Welcome to the <span className="text-blue-500">Playlist App</span>
      </h1>

      <p className="mb-10 text-lg leading-relaxed text-slate-600">
        This application uses <strong>React</strong>, <strong>React Router DOM</strong>, and <strong>Firebase Firestore</strong> to deliver a seamless, real-time experience.
      </p>

      {/* =====================================
          FEATURES SECTION
      ===================================== */}
      <h3 className="pb-3 mb-6 text-2xl font-bold border-b text-slate-700 border-slate-200">
        Core Features
      </h3>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="flex items-center gap-3 p-4 transition-all duration-200 bg-white border border-transparent shadow-sm rounded-xl hover:border-slate-200 hover:shadow-md"
          >
            {/* Custom Checkmark Icon (Blue Accent) */}
            <svg 
              className="w-5 h-5 flex-shrink-0 text-blue-400" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            
            <span className="font-medium text-slate-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Home;