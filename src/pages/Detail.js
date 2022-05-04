import React from "react";

import { useFetchDetail } from "../hooks/useFetchDetail";
import ChartDetail from "../components/Chart";
const Detail = ({ history }) => {
  const { detail, assetHistory } = useFetchDetail();

  const min = (data) => {
    return Math.min(...data.map((h) => parseFloat(h.priceUsd)));
  };
  const max = (data) => {
    return Math.max(...data.map((h) => parseFloat(h.priceUsd)));
  };
  const avg = (data) => {
    let sum = 0;
    data.forEach((element) => {
      sum += parseFloat(element.priceUsd);
    });
    let avg = sum / (data.length);
    return avg;
  };
  const handleClick = () => {
    history.push(`/`);
  };

  return (
    <>
      {detail.loading ? (
        <h1>Cargando</h1>
      ) : (
        <div class="h-full w-full lg:w-2/3">
          <div class="h-auto w-full flex flex-col text-center text-lg font-medium text-gray-900 py-4 bg-purple-500 border-b-2 rounded-t-md p-4">
            <div className=" min-w-max flex flex-row justify-between items-center py-2">
              <div className="flex flex-row">
                <img
                  className="w-16 h-16 "
                  src={`https://static.coincap.io/assets/icons/${detail.data.symbol.toLowerCase()}@2x.png`}
                  alt="a.name"
                />
                <div className="pl-4">
                  <div className="w-max text-3xl font-base text-gray-900">
                    {detail.data.name}
                  </div>
                  <div className="text-xl font-base text-left text-gray-900">
                    {detail.data.symbol}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  className=" font-base text-gray-900 py-2 px-4 border-2 bg-gray-500 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-gray-500"
                  onClick={() => handleClick()}
                >
                  Volver
                </button>
              </div>
            </div>
            <div className=" w-full flex flex-row border-b border-purple-700 px-2">

             

              <div className="w-1/4 flex flex-col justify-center items-center py-2">
                <div className="w-max text-sm font-base text-gray-800">
                  ${min(assetHistory.data).toFixed(2)}
                </div>
                <div className="text-xs font-base text-left text-gray-900">
                  MÍNIMO
                </div>
              </div>

              <div className="w-1/4 flex flex-col justify-center items-center py-2">
                <div className="w-max text-sm font-base text-gray-900">
                  ${avg(assetHistory.data).toFixed(2)}
                </div>
                <div className="text-xs font-base text-left text-gray-900">
                  PROMEDIO
                </div>
              </div>

              <div className="w-1/4 flex flex-col justify-center items-center py-2">
                <div className="w-max text-sm font-base text-gray-900">
                  ${max(assetHistory.data).toFixed(2)}
                </div>
                <div className="text-xs font-base text-left text-gray-900">
                  MÁXIMO
                </div>
              </div>

              <div className="w-1/4 flex flex-col justify-center items-center py-2">
                <div className="w-max text-sm font-base text-gray-900">
                  {Intl.NumberFormat("en-US").format(
                    detail.data.changePercent24Hr
                  )}
                  %
                </div>
                <div className="text-xs font-base text-left text-gray-900">
                  CAMBIO
                </div>
              </div>

            </div>
          </div>

          <div class="h-4/5 text-center bg-white shadow-lg p-2">
            <ChartDetail name={detail.data.name} data={assetHistory.data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
