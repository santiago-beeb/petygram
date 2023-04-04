import React, { Suspense } from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, HashRouter, Navigate, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { User } from "./pages/User";
import Context from "./Context";
import { PageNotFound } from "./pages/404";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

const Favs = React.lazy(() => import("./pages/Favs"));

function App(props) {
  return (
    <Suspense fallback={<div />}>
      <Context.Consumer>
        {({ isAuth }) => {
          console.log("isAuth:", isAuth);
          return (
            <>
              <HashRouter>
                <GlobalStyles />
                <Logo />
                <Routes>
                  <Route
                    path="/"
                    element={isAuth ? <Home /> : <Navigate to="/login" />}
                  />
                  <Route
                    path="/favs"
                    element={isAuth ? <Favs /> : <Navigate to="/login" />}
                  />
                  <Route
                    path="/user"
                    element={isAuth ? <User /> : <Navigate to="/login" />}
                  />
                  <Route path="/login" element={<NotRegisterUser />} />
                  <Route path="/pet/:categoryId" element={<Home />} />
                  <Route path="/search" element={<Detail />} />
                  <Route path="/detail/:detailId" element={<Detail />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
                <NavBar />
              </HashRouter>
            </>
          );
        }}
      </Context.Consumer>
    </Suspense>
  );
}

export default App;
