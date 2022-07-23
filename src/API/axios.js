import axios from "axios";

export const api = axios.create({
  API_URL_DATA: "https://jsonplaceholder.typicode.com",

  //   `https://restcountries.com/v3.1/all`;
});

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};
