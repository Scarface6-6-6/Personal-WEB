import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import About from "./pages/About";
import Galeria from "./pages/Galeria";
import Gustos from "./pages/Gustos";
import Home from "./pages/Home";
import Now from "./pages/Now";
import RenataInvite from "./pages/RenataInvite";
import Redes from "./pages/redes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/renata" element={<RenataInvite />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gustos" element={<Gustos />} />
          <Route path="/likes" element={<Gustos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/gallery" element={<Galeria />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="/links" element={<Redes />} />
          <Route path="/now" element={<Now />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

