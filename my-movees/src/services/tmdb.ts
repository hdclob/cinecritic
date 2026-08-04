import type { TMDBResponse } from "../types/tmdb";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

// T is a generic placeholder.
// 'resource' will be 'movie' or 'tv' based on TMDB's API routes.
export const fetchPopular = async <T>(
  resource: "movie" | "tv",
): Promise<T[]> => {
  const response = await fetch(
    `${BASE_URL}/${resource}/popular?api_key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch popular ${resource}`);
  }

  const data: TMDBResponse<T> = await response.json();
  return data.results;
};
