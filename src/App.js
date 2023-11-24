import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Header";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Favoritos from "./pages/Favoritos";
import Detalle from "./pages/Detalle";
import "./App.css";
import DatosJsonProvider from "./Context/DatosJsonContext";
import FavoritosProvider from "./Context/FavoritosContext";

function App() {
  
  
  return (
    <FavoritosProvider>
    <DatosJsonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detalle/:id" element={<Detalle />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </DatosJsonProvider>
    </FavoritosProvider>
  );
}

export default App;