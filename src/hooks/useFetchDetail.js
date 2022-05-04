import { useState, useEffect } from "react";
import { getAsset, getAssetHistory } from "../helpers/apiHelpers";
import { useParams } from "react-router-dom";

export const useFetchDetail = () => {
  const { coinId } = useParams();
  const [detail, setDetail] = useState({
    data: [],
    loading: true,
    error: false,
  });

  const [assetHistory, setAssetHistory] = useState({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    getAsset(coinId).then((d) => {
      setDetail({
        data: d,
        loading: false,
        error: false,
      });
    });

    getAssetHistory(coinId).then((d) => {
      setAssetHistory({
        data: d,
        loading: false,
        error: false,
      });
    });
  }, [coinId]);

  return { detail, assetHistory };
};
