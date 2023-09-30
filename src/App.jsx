import {} from "react";
import MenuNavegacion from "./components/Menu/MenuNavegacion";
import { Route, Routes } from "react-router-dom";
import Contenido from "./components/pages/Contenido";
import Productos from "./components/pages/Productos";
import BluuCard from "./components/pages/BluuCard";
import CajitaFlex from "./components/pages/CajitaFlex";
import CajitaGrid from "./components/pages/CajitaGrid";

function App() {
  return (
    <>
      <MenuNavegacion />
      <Routes>
        <Route path="/" element={<Contenido />}/>
        <Route path="/Material-UI/BluuCard" element={<BluuCard />}></Route>
        <Route path="/Material-UI/CajitaFlex" element={<CajitaFlex />} />
        <Route path="/Material-UI/CajitaGrid" element={<CajitaGrid />} />
        <Route path="/Material-UI/Productos" element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;
