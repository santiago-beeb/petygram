import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";
import PropTypes from "prop-types";

function FavButton({ liked, likes, onClick, mutateAction, manager }) {
  const Icon = liked ? (
    <MdFavorite size="32px" color="red" />
  ) : (
    <MdFavoriteBorder size="32px" color="white" />
  );

  const handleClick = (mutateAction, manager) => {
    onClick(mutateAction, manager);
  };

  return (
    <Button onClick={() => handleClick(mutateAction, manager)}>
      {Icon} {likes} likes!
    </Button>
  );
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  mutateAction: PropTypes.func.isRequired,
  manager: PropTypes.object.isRequired,
};

export default FavButton;
