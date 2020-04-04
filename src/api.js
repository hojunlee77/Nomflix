import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params["api_key"] = "3a82bd8235013487c11002a113616745";
  config.params["language"] = "en-US";
  return config;
});

api.get("movie/popular");

export default api;
