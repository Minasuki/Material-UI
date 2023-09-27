import { Button, ThemeProvider, Typography } from "@mui/material";
import {} from "react";
import Theme from './components/Theme'


function App() {
  

  return (
    <ThemeProvider theme={Theme}>
      <div>
        <Typography variant="h1" color="initial">
          hola mundo
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </div>
      <Button variant="contained" color="primary">
        Boton 1
      </Button>
      <Button variant="contained" color="secondary">
        Boton 2
      </Button>
      <Button variant="otro" color="info" size="large">
        Algo
      </Button>
      <Button variant="diseñado" color="inherit" size="large">
        Boton con estilo
      </Button>
    </ThemeProvider>
  );
}

export default App;
