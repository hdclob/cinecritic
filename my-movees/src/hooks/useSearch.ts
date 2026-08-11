import { useState, useEffect } from "react";
import { searchMulti } from "../services/tmdb";

export const useSearch = <T>(query: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 1. If there's no query, clear data and don't fetch
    if (!query.trim()) {
      setData([]);
      setIsLoading(false);
      return;
    }

    // 2. Start the loading state
    setIsLoading(true);
    setError(null);

    // 3. Call the service (matching your .then pattern)
    searchMulti<any>(query)
      .then((results) => {
        // TMDB search/multi returns movies, tv, AND people.
        // We filter out people so your MediaPage cards don't break.
        const filtered = results.filter(
          (item) => item.media_type === "movie" || item.media_type === "tv"
        ) as T[];
        
        setData(filtered);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]); // Re-fetch whenever the query string changes

  return { data, isLoading, error };
};