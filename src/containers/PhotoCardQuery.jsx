import { PhotoCard } from "../components/PhotoCard";
import { gql, useQuery } from "@apollo/client";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import { LoadingCard } from "../components/LoadingCard";

const Div = styled.div`
  position: relative;
  .left-arrow {
    box-sizing: content-box;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 10px;
    margin-inline: 12px;
    cursor: pointer;
  }
`;

const GET_ANIMAL = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_ANIMAL, { variables: { id } });

  if (error) {
    console.log(error);
    return <div>Error!</div>;
  }

  return (
    <Div>
      <AiOutlineArrowLeft
        className="left-arrow"
        size={24}
        onClick={console.log("")}
      />
      <ul>
        {loading ? (
          <LoadingCard />
        ) : (
          <PhotoCard {...data.photo} extraClass="noPointer" />
        )}
      </ul>
    </Div>
  );
};
