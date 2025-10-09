import client from "../../api/client";
const endpoint = "/bookmarks";

export const getBookmarks = () => {
  return client.get(endpoint);
};
