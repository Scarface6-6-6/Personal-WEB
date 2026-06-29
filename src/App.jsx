import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import About from "./pages/About";
import Galeria from "./pages/Galeria";
import Gustos from "./pages/Gustos";
import Home from "./pages/Home";
import Now from "./pages/Now";
import Redes from "./pages/redes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
          <Route path="/renata" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
