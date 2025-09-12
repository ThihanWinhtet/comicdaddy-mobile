import client from "../../api/client";

const endpoint = "/comics";

export const getComics = (limit = 9) => {
  const params = { limit };
  return client.get(endpoint, params);
};