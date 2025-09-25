import { useEffect, useState } from "react";
import { getComics, getPopularComics, getRelatedComics } from "./api";

export const useComics = (limit = 9, search) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadComics();
  }, [search]);

  const loadComics = async () => {
    setLoading(true);
    const response = await getComics(limit, search);
    if (response.ok) setComics(response.data.data.comics);
    setLoading(false);
  };

  return { comics, loading, reload: loadComics };
};

export const usePopularComics = (limit = 9) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadComics();
  }, []);

  const loadComics = async () => {
    setLoading(true);
    const response = await getPopularComics(limit);
    if (response.ok) setComics(response.data.data);
    setLoading(false);
  };

  return { comics, loading, reload: loadComics };
};

export const useRelatedComic = (comicId) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadComics();
  }, [comicId]);

  const loadComics = async () => {
    setLoading(true);
    const response = await getRelatedComics(comicId);
    if (response.ok) setComics(response.data.data.comics);
    setLoading(false);
  };

  return { comics, loading, reload: loadComics };
};
