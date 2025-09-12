import { useEffect, useState } from "react";
import { getComics } from "./api";

export const useComics = (limit = 12) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadComics();
  }, []);

  const loadComics = async () => {
    setLoading(true);
    const response = await getComics(limit);
    if (response.ok) setComics(response.data.data.comics);
    setLoading(false);
  };

  return { comics, loading, reload: loadComics };
};
