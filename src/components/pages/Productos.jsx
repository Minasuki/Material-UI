import { Box, Paper, Typography, Button } from "@mui/material";
import styled from "styled-components";

const Productos = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img
        src="https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg"
        alt="Una imagen XD"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Nombre del producto</Typography>
        <Typography variant="body1">Descripcion del producto</Typography>
        <Button variant="contained">Agregar al carrito</Button>
      </Box>
      <Box sx={{ mr: 2 }} component="p">
        $19.99
      </Box>
    </Paper>
  );
};

export default Productos;
