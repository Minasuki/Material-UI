import {} from "react";
import MenuNavegacion from "./components/Menu/MenuNavegacion";
import { Route, Routes } from "react-router-dom";
import Contenido from "./components/pages/Contenido";
import Productos from "./components/pages/Productos";
import BluuCard from "./components/pages/BluuCard";
import CajitaFlex from "./components/pages/CajitaFlex";
import CajitaGrid from "./components/pages/CajitaGrid";
import Container from '@mui/material/Container'
import ValidarFrom from "./components/pages/ValidarFrom";
import Practica from "./components/pages/Practica";
import FireBase from "./components/pages/Crud/FireBase";
import Add from "./components/pages/Crud/Add";

function App() {
  return (
    <>
      <MenuNavegacion />
      <Container  sx={{ mt: 10 }}>
      <Routes>
        <Route path="/Material-UI" element={<Contenido />}/>
        <Route path="/Material-UI/BluuCard" element={<BluuCard />}></Route>
        <Route path="/Material-UI/CajitaFlex" element={<CajitaFlex />} />
        <Route path="/Material-UI/CajitaGrid" element={<CajitaGrid />} />
        <Route path="/Material-UI/Productos" element={<Productos />} />
        <Route path="/Material-UI/ValidarFormulario" element={<ValidarFrom />} />
        <Route path="/Material-UI/Practica" element={<Practica />} />
        <Route path="/Material-UI/FireBase" element={<FireBase />} />
        <Route path="/Material-UI/FireBase/Add" element={<Add />} />
      </Routes>
      </Container>
    </>
  );
}

export default App;
