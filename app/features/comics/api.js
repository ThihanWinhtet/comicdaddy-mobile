import client from "../../api/client";

const endpoint = "/comics";

export const getComics = (limit = 9, search = "") => {
  const params = { limit, search };
  return client.get(endpoint, params);
};

export const getPopularComics = (limit = 9) => {
  const params = { limit };
  return client.get(`${endpoint}/popular`, params);
};

export const getRelatedComics = (comicId, limit = 9) => {
  const params = { limit };
  return client.get(`${endpoint}/related/${comicId}`, params);
};
