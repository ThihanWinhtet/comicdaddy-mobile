import client from "../../api/client";

const endpoint = "/chapters";

export const getChapters = (comicId) => {
  return client.get(`${endpoint}?comicId=${comicId}`);
};
