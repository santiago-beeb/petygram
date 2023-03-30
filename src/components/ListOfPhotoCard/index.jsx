import { useQuery } from "@apollo/client";
import { ANIMALS_QUERY } from "../../hoc/withPhotos";
import { LoadingCard } from "../LoadingCard";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCard = ({ categoryId }) => {
  const { data, loading, error } = useQuery(ANIMALS_QUERY, {
    variables: { categoryId },
  });
  if (loading) return <LoadingCard />;
  if (error) return <pre>{error.message}</pre>;
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
