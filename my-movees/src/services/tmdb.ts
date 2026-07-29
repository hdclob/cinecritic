import type { Movie, TMDBResponse } from "../types/tmdb";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data: TMDBResponse<Movie> = await response.json();
  return data.results;
};