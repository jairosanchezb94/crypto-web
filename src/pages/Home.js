import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import Table from "../components/Table";


const Home = () => {
  const { data, loading } = useFetchData();

  return (
    <>
      {loading ? <h1>Cargando</h1> : <Table data={data} />}
    </>
  );
};
export default Home;
