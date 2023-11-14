// Axios Response Interceptor
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.ksbgarage.com",
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    config.headers.Locale = `${localStorage.getItem("lang")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
