import React from "react";

import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <div class="h-full w-full lg:w-2/3">
      <div class="h-auto w-full flex flex-row text-center text-lg font-medium text-gray-900 py-4 bg-purple-500 border-b-2 rounded-t-md">
        <div class="w-4/12 p-2">Nombre</div>
        <div class="w-3/12 lg:1/12 p-2">Precio</div>
        <div class="w-3/12 p-2 hidden lg:inline-block">Cap. de mercado</div>
        <div class="w-3/12 lg:w-2/12 p-2">Cambio</div>
        <div class="w-2/12 p-2 hidden lg:inline-block">VWAP(24h)</div>
        <div class="w-3/12 lg:w-2/12 p-2">Volumen</div>
      </div>
      <div class="h-4/5 overflow-auto text-center bg-white shadow-lg p-2">
        {data.map((dat) => (
          <TableRow key={dat.id} data={dat} />
        ))}
      </div>
    </div>
  );
};
export default Table;
