import axios from "axios";
import { API_TMDB_URL, apiKey, lang, URL_BOOKMARKS, URL_LOGIN } from "../config";
import jwtDecode from "jwt-decode";

// const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));

/* Handle API The Movie DB */
export const clientApiTMDB = async (endpoint) => {
  const page = 1;
  const startChar = endpoint.includes("?") ? `&` : `?`;
  const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`;

  return axios.get(`${API_TMDB_URL}/${endpoint}${keyLang}`).catch((error) => {
    if (error.response) {
      const err = {
        ...error.response,
        message: error.response?.data?.status_message,
      };
      return Promise.reject(err);
    } else {
      return Promise.reject(error);
    }
  });
};

/* Authentification */
export const authenticate = (credentials, action = URL_LOGIN) => {
  return axios
    .post(action, credentials)
    .then((res) => res.data)
    .then((data) => {
      window.localStorage.setItem("authToken", data.jwt);
      window.localStorage.setItem("username", data.user.username);
    });
};

export function isAuthticated() {
  const token = window.localStorage.getItem("authToken");

  if (token) {
    const { exp } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
      return true;
    }
    return false;
  }
  return false;
}

export function logout() {
  window.localStorage.removeItem("authToken");
  window.localStorage.removeItem("username");
  delete axios.defaults.headers["Authorization"];
}

/* Handle API Bookmarks */
export const createBookmarks = (payload) => {
  return axios.post(URL_BOOKMARKS, payload);
};

export const getBookmarksAPI = () => {
  axios.defaults.headers["Authorization"] = "Bearer " + window.localStorage.getItem("authToken");
  return axios.get(URL_BOOKMARKS);
};
