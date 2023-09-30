import {
  CardMedia,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
  Box,
} from "@mui/material";

export default function BluuCard() {
  return (
    <Card
      sx={{
        paddingTop: "15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "95%",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/1000x200"
            alt="Una imagen XD"
            height="200"
          />
          <CardContent>
            <Typography variant="h5">Card Title</Typography>
            <Typography variant="body2" component="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
              deleniti accusamus quis quidem fugit voluptates, tempora nobis
              expedita molestias, fuga, quam eum id aliquid illum nam? Porro
              repudiandae itaque harum.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button variant="contained">Add</Button>
          <Button variant="contained">Remove</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
