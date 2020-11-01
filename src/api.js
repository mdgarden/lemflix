import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ca0aa826fbb1787993f6db724163e030",
    language: "en-US",
  },
});

export const MoviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movies", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const TvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) => api.get(`tv/${id}`),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
