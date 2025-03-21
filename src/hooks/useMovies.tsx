import { instance } from "@/utils/instance";
import { useEffect, useState } from "react";

export const useMovies = (path: string) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await instance.get(path);

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, error, loading, totalPages };
};
