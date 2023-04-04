import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../components/ListOfPhotoCard";
import { Layout } from "../components/Layout";

function HomePage(props) {
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPhotoCard />
    </Layout>
  );
}

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});

export { Home };
