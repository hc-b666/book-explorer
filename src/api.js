import axios from "axios";

const api = axios.create({
  baseURL: "https://openlibrary.org",
  headers: {},
});

export const authApi = axios.create({
  baseURL: "http://localhost:9999/api/v1",
});

export default api;
