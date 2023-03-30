import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
