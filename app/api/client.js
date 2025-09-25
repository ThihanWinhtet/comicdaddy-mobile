import { create } from "apisauce";

const client = create({
  baseURL: "http://192.168.1.2:3000/api",
  timeout: 1000,
});

export default client;
