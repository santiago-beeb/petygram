import { css, keyframes } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0
  }
  
  to {
    filter: blur(0);
    opacity: 1;
  }
  `;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

const scale = keyframes`
from {
  transform: scale(1);
  top: -100px;
  border-radius: 2px;
}
to{
  transform: scale(.66);
  border-radius: 60px;
}
`
export const scaleDown = ({ time = "1s", type = "ease" } = {}) => css`
animation: ${time} ${scale} ${type};
`;