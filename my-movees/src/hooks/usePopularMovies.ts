import { useState, useEffect } from "react";
import { fetchPopularMovies } from "../services/tmdb";
import type { Movie } from "../types/tmdb";

export const usePopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies().then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, []);

  return { movies, isLoading };
};
