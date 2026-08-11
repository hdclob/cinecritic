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

/**
 * New Search Function
 * TMDB "multi" search hits movies, tv shows, and people in one request.
 */
export const searchMulti = async <T>(query: string): Promise<T[]> => {
  // Use encodeURIComponent to handle spaces and special characters in the search string
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to search for: ${query}`);
  }

  const data: TMDBResponse<T> = await response.json();
  return data.results;
};
