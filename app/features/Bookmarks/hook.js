import { useEffect, useState } from "react";
import { getBookmarks } from "./api";

export const useBookmarks = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookmarks = async () => {
    setLoading(true);
    const res = await getBookmarks();
    if (res.ok) setComics(res.data.data.response);
    setLoading(false);
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  return { comics, loading, loadBookmarks };
};
