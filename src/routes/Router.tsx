import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Thumbnail from "../pages/Thumbnail";
import DecoNotion from "../pages/DecoNotion";
import Nav from "../components/Nav";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/thumbnail" element={<Thumbnail />} />
        <Route path="/decoNotion" element={<DecoNotion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
