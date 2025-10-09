import client from "../../api/client";

export const loginApi = (data) => client.post("/auth/login", data);
export const registerApi = (data) => client.post("/auth/register", data);
export const getUserApi = () => client.post("/auth/me");
