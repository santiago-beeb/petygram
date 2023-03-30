import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {

  return (
    <Button onClick={onClick}>
      {!liked ? (
        <MdFavoriteBorder color="white" size="32px" />
      ) : (
        <MdFavorite color="red" size="32px" />
      )}
      <span>{likes} Likes!</span>
    </Button>
  );
};
