import React, { useState } from "react";

function RecipeCard({ recipe = {}, onEdit, onDelete }) {
  // Use a single state for tabs to keep logic clean and avoid layout breaks
  const [activeTab, setActiveTab] = useState(null); // 'ingredients', 'instructions', or null

  // Safely parse arrays with optional chaining and clean empty strings
  const ingredients = recipe?.ingredients?.split("\n").filter(Boolean) || [];
  const instructions = recipe?.instructions?.split("\n").filter(Boolean) || [];

  const toggleTab = (tab) => {
    setActiveTab((prev) => (prev === tab ? null : tab));
  };

  return (
    <article className="group relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/10">
      
      {/* 1. IMAGE HEADER */}
      <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-orange-600 via-red-500 to-slate-900">
        {recipe.imageUrl ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.title || "Recipe image"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/10 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {recipe.category || "General"}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          type="button"
          aria-label="Save to favorites"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-red-500"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* 2. CARD CONTENT */}
      <div className="flex flex-1 flex-col p-6">
        
        {/* Title & Description */}
        <div>
          <h2 className="line-clamp-1 text-2xl font-bold text-white transition-colors group-hover:text-orange-400">
            {recipe.title || "Untitled Recipe"}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">
            {recipe.description || "A delicious homemade recipe perfect for family and friends. Fresh ingredients and easy to make."}
          </p>
        </div>

        {/* Meta Stats */}
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300">
            <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            {recipe.rating || "4.8"}
          </div>
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300">
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {recipe.time || "30 min"}
          </div>
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300">
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {recipe.difficulty || "Easy"}
          </div>
        </div>

        {/* 3. INTERACTIVE TOGGLES */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            aria-expanded={activeTab === "ingredients"}
            onClick={() => toggleTab("ingredients")}
            className={`flex flex-col items-start rounded-2xl border p-4 transition-all duration-200 ${
              activeTab === "ingredients"
                ? "border-orange-500/50 bg-orange-500/10 ring-1 ring-orange-500/50"
                : "border-slate-800 bg-slate-800/30 hover:border-orange-500/30 hover:bg-orange-500/5"
            }`}
          >
            <span className="font-semibold text-white">Ingredients</span>
            <span className="mt-1 text-xs text-slate-400">{ingredients.length} items</span>
          </button>

          <button
            type="button"
            aria-expanded={activeTab === "instructions"}
            onClick={() => toggleTab("instructions")}
            className={`flex flex-col items-start rounded-2xl border p-4 transition-all duration-200 ${
              activeTab === "instructions"
                ? "border-blue-500/50 bg-blue-500/10 ring-1 ring-blue-500/50"
                : "border-slate-800 bg-slate-800/30 hover:border-blue-500/30 hover:bg-blue-500/5"
            }`}
          >
            <span className="font-semibold text-white">Instructions</span>
            <span className="mt-1 text-xs text-slate-400">{instructions.length} steps</span>
          </button>
        </div>

        {/* 4. EXPANDABLE CONTENT AREA */}
        <div className="mt-4 min-h-[120px] flex-1">
          {/* Default Preview */}
          {!activeTab && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 animate-in fade-in">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Preview</h3>
              {ingredients.length > 0 ? (
                <ul className="space-y-2">
                  {ingredients.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                  {ingredients.length > 3 && (
                    <li className="text-xs font-medium text-orange-400 mt-2">
                      + {ingredients.length - 3} more ingredients
                    </li>
                  )}
                </ul>
              ) : (
                <p className="text-sm italic text-slate-500">No details available.</p>
              )}
            </div>
          )}

          {/* Expanded Ingredients */}
          {activeTab === "ingredients" && (
            <div className="rounded-2xl border border-orange-500/20 bg-slate-900 p-4 animate-in fade-in slide-in-from-top-2">
              <ul className="max-h-48 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                {ingredients.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-[10px] font-bold text-orange-400">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Expanded Instructions */}
          {activeTab === "instructions" && (
            <div className="rounded-2xl border border-blue-500/20 bg-slate-900 p-4 animate-in fade-in slide-in-from-top-2">
              <ol className="max-h-48 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {instructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* 5. ACTION BUTTONS */}
        <div className="mt-6 flex gap-3 border-t border-slate-800/80 pt-5">
          <button
            type="button"
            onClick={() => onEdit(recipe)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit
          </button>
          
          <button
            type="button"
            onClick={() => onDelete(recipe.id)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition-all hover:bg-red-500/20 hover:text-red-300 active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        </div>

      </div>
    </article>
  );
}

export default RecipeCard;