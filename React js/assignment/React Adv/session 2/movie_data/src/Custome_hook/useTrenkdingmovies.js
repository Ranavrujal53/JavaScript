import { useEffect, useState } from "react";

const API_KEY = "YOUR_API_KEY";

const useTrendingMovies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const result = await response.json();
        setData(result.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { data, loading, error };
};

export default useTrendingMovies;