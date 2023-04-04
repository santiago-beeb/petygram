import React from "react";
import PhotoCard from "../PhotoCard";
import { GraphqlContainer } from "../../containers/graphqlContainer";

import { gql } from "@apollo/client";

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

function ListOfPhotoCardComponent({ data, loading, error }) {
  if (loading) return "Loading...";

  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <ul style={{ marginBottom: "50px", marginTop:"10px" }}>
        {data.photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </ul>
    </>
  );
}

const ListOfPhotoCard = GraphqlContainer(
  ListOfPhotoCardComponent,
  withPhotos,
  (props) => ({ categoryId: props.categoryId })
);

export { ListOfPhotoCard };
