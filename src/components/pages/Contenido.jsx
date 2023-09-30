import { Box, Button, Typography } from "@mui/material";

const Contenido = () => {
  return (
    <Box>
      <Typography variant="h1" color="initial">
        hola mundo
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

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
    </Box>
  );
};

export default Contenido;
