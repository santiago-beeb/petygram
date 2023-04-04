import React from "react";
import { Layout } from "../components/Layout";
import { PhotoCardDetailed } from "../components/photoCardDetail";

function Detail(props) {
  return (
    <Layout title={"detalle de mascota"}>
      <PhotoCardDetailed />
    </Layout>
  );
}

export { Detail };
