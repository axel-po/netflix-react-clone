import { useReducer, useCallback, useState, useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { clientApiTMDB } from "./clientApi";

const reducer = (state, action) => {
  switch (action.type) {
    case "fetching":
      return { status: "fetching", data: null, error: null };
    case "done":
      return { status: "done", data: action.payload, error: null };
    case "fail":
      return { status: "error", data: null, error: action.error };
    default:
      throw new Error("Action non supporté");
  }
};

const initialState = {
  data: null,
  error: null,
  status: "idle",
};

function useFetchData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, error, status } = state;

  const execute = useCallback((promise) => {
    dispatch({ type: "fetching" });
    promise.then((data) => dispatch({ type: "done", payload: data })).catch((error) => dispatch({ type: "fail", error }));
  }, []);

  const setData = useCallback((data) => dispatch({ type: "done", payload: data }), [dispatch]);

  return { data, error, status, execute, setData };
}

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return width;
}

function useMovie(type, id) {
  const { data } = useQuery(`${type}/${id}`, () => clientApiTMDB(`${type}/${id}`));

  return data;
}

function useMovieFilter(type, filter, param) {
  const endpointLatest = `${type}/latest`;
  const endpointPopular = `${type}/popular`;
  const endpointTopRated = `${type}/top_rated`;
  const endpointGenre = `discover/${type}?with_genres=${param}`;
  const endpointTrending = `trending/${type}/day`;

  let endpoint;
  switch (filter) {
    case "populaire":
      endpoint = endpointPopular;
      break;
    case "latest":
      endpoint = endpointLatest;
      break;
    case "toprated":
      endpoint = endpointTopRated;
      break;
    case "trending":
      endpoint = endpointTrending;
      break;
    case "genre":
      endpoint = endpointGenre;
      break;
    default:
      throw new Error("Type non supporté");
  }

  const { data } = useQuery(`${endpoint}`, () => clientApiTMDB(`${endpoint}`));

  return data?.data?.results;
}

function useSearchMovie(query) {
  const { data } = useQuery(`search/multi?query=${query}`, () => clientApiTMDB(`search/multi?query=${query}`));

  return data?.data?.results ?? [];
}

function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      const el = ref?.current;

      if (!el || el.contains(e.target)) {
        return;
      }

      handler(e);
      console.log(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
export { useFetchData, useWidth, useMovie, useMovieFilter, useSearchMovie, useClickOutside };
