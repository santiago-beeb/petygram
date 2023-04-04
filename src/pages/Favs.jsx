import React from "react";
import { ListOfFavsQuery } from "../components/ListOfFavs";
import { Layout } from "../components/Layout";

function Favs(props) {
  return (
    <Layout
      title={"Favoritos"}
      subtitle="Aqui puedes encontrar tus favoritos"
    >
      <ListOfFavsQuery />
    </Layout>
  );
}

export default Favs;
