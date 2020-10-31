import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ca0aa826fbb1787993f6db724163e030",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
