import { useState, useEffect } from "react";
import { fetchPopular } from "../services/tmdb";

export const usePopular = <T>(resource: "movie" | "tv") => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPopular<T>(resource)
      .then((results) => {
        setData(results);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [resource]); // If resource changes, re-fetch

  return { data, isLoading, error };
};
