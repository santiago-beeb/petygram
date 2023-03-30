import { gql } from "@apollo/client";

export const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const ToggleLikeMutation = ({ children }) => {
  return <useMutation mutation={LIKE_PHOTO}>{children}</useMutation>;
};
