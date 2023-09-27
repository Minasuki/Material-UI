import { ThemeProvider } from "@mui/material";
import {} from "react";
import Theme from "./components/Theme";
import Navbar from './components/Navbar1'
import Listas from './components/Listas'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar/>
      <Listas/>
    </ThemeProvider>
   
  );
}

export default App;
