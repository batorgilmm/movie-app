import { instance } from "@/utils/instance";
import { useEffect, useState } from "react";

export const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchGenres = async () => {
    try {
      const response = await instance.get("/genre/movie/list?language=en");

      setGenres(response.data.genres);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return { genres, error, loading };
};
