import { Box, Typography } from "@mui/material";

const style = {
    display: 'flex',
  flexDirection: "column",
};

const CajitaFlex = () => {
  return (
    <Box>
      <Box sx={{ mx: 1, my: 2, width: 1 / 2 }}>Hola como estas?</Box>
      <Box sx={style}>
        <Typography variant="h6" color="secondary">
          Bien y tu
        </Typography>
        <Typography variant="h6" color="secondary">
          Igualmente Gracias
        </Typography>
      </Box>
    </Box>
  );
};

export default CajitaFlex;
