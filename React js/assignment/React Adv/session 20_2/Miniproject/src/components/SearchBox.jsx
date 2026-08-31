import React, { memo, useState } from "react";

function SearchBox({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setSearch(value);

    // Send search value to parent component
    onSearch(value);
  };

  const handleClear = () => {
    setSearch("");
    onSearch("");
  };

  return (
    <div className="mx-auto mb-8 w-full max-w-2xl">
      <div className="relative">
        {/* Search Icon */}
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-500">
          🔍
        </span>

        {/* Search Input */}
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search movies..."
          aria-label="Search movies"
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-12 text-white placeholder-slate-500 shadow-lg outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        {/* Clear Button */}
        {search && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-slate-500 transition hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Information */}
      <p className="mt-2 px-1 text-xs text-slate-500">
        {search
          ? `Searching for "${search}"`
          : "Search your movie wishlist by title"}
      </p>
    </div>
  );
}

// Prevent unnecessary re-rendering when props don't change
export default memo(SearchBox);
