import { create } from "apisauce";
import * as SecureStore from "expo-secure-store";

const client = create({
  baseURL: "http://192.168.1.6:3000/api",
  timeout: 1000,
});

client.addAsyncRequestTransform(async (request) => {
  const token = await SecureStore.getItemAsync("accessToken");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
});

export default client;
