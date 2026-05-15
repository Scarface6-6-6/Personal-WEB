import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gustos from "./pages/Gustos";
import Galeria from "./pages/Galeria";
import Redes from "./pages/redes";
import Sidebar from "./components/Sidebar";
import "./Styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <div className="shell">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gustos" element={<Gustos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/redes" element={<Redes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;