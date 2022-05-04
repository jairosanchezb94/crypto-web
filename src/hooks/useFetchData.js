import { useState, useEffect } from "react";
import { getAssets } from "../helpers/apiHelpers";

export const useFetchData = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
      console.log("h")
      getAssets().then((d) => {
        setState({
          data: d,
          loading: false,
          error: false,
        });
      });
  }, []);

  return state;
};
