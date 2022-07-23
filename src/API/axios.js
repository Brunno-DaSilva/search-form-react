import axios from "axios";

export const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getPosts = async () => {
  const response = await api.get("/all");
  return response.data;
};
