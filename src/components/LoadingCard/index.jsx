import { Article, ImgWrapper } from "../PhotoCard/styles";
import { ButtonLoading, ImgLoading } from "./styles";

export const LoadingCard = () => {
  return (
    <Article>
      <>
        <ImgWrapper>
          <ImgLoading />
        </ImgWrapper>
        <ButtonLoading />
      </>
    </Article>
  );
};
