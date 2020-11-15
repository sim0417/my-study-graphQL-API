import axios from "axios";

const MOVIE_API_KEY = "5181b57410b2ce3a15385acebfc7d3e0";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: MOVIE_API_KEY,
    language: "en-US",
    // language: "ko",
  },
});

const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  videos: (id) => api.get(`movie/${id}/videos`),
  credits: (id) => api.get(`movie/${id}/credits`),
  recommend: (id) => api.get(`/movie/${id}/recommendations`),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  videos: (id) => api.get(`tv/${id}/videos`),
  credits: (id) => api.get(`tv/${id}/credits`),
  recommend: (id) => api.get(`/tv/${id}/recommendations`),
};

export const getMovies = async () => {
  const {
    data: { results },
  } = await moviesApi.popular();

  return results;
};

export const getMovie = async (id) => {
  const { data: results } = await moviesApi.movieDetail(id);
  return results;
};

export const getSuggestions = async (id) => {
  const {
    data: { results },
  } = await moviesApi.recommend(id);
  return results;
};
