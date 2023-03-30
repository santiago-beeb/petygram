import { Logo } from "../Logo";
import { NavBar } from "../NavBar";
import { GlobalStyle } from "../../styles/GlobalStyles";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      {children}
      <NavBar />
    </>
  );
};
