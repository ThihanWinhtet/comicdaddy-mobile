import { useEffect, useState } from "react";
import { getChapters } from "./api";

export const useChapters = (comicId) => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    loadChapter();
  }, []);

  const loadChapter = async () => {
    const response = await getChapters(comicId);
    if (response.ok) setChapters(response.data.data);
  };

  return { chapters, reload: loadChapter };
};
