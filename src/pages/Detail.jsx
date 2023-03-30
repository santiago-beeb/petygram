import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../containers/PhotoCardQuery";

export const Detail = () => {
  const params = useParams();

  return <PhotoCardWithQuery id={params.detailId} />;
};
