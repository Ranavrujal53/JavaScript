import { useState, useEffect } from "react";

const useSearchMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovies(data.Search || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setMovies([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [query]);

  // Second useEffect (Requirement 4)
  useEffect(() => {
    if (movies.length > 0) {
      console.log("Movie data updated:", movies);
    }
  }, [movies]);

  return { movies, loading, error };
};

export default useSearchMovies;