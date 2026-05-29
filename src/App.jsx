import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gustos from "./pages/Gustos";
import Galeria from "./pages/Galeria";
import Redes from "./pages/redes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gustos" element={<Gustos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/redes" element={<Redes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
