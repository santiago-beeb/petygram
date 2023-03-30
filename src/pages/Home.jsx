import { useParams } from "react-router-dom";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../components/ListOfPhotoCard";

export const Home = () => {
  const { id } = useParams();

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  );
};
