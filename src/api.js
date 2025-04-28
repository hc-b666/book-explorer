import axios from "axios";

const api = axios.create({
  baseURL: "https://openlibrary.org",
  headers: {
    // "User-Agent": "MiniBookExplorer/1.0 (bobur0218programmer@gmail.com)",
  },
});

export default api;
