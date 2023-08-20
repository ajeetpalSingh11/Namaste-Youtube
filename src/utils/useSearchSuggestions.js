import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGESSTION_API } from "./constants";
import { cacheResults } from "./searchSlice";

const useSearchSuggestions = (searchQuery) => {
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_SUGESSTION_API + searchQuery);
      const data = await res.json();

      setSuggestions(data[1]);

      dispatch(
        cacheResults({
          [searchQuery]: data[1],
        })
      );
    } catch (error) {
      setError(error);
    }
  };

  return { suggestions, error };
};

export default useSearchSuggestions;
