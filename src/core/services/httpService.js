import axios from "axios";
import queryString from "query-string";
import { getToken } from "../localStore";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  },

  paramsSerializer: (params) => queryString.stringify(params)
});

http.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response?.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    console.log("error: ", error);
    const data = error.response?.data;
    if (data && data.message) {
      throw data;
    } else {
      error.message = "Some thing wrong";
      throw error;
    }
  }
);

export default http;
