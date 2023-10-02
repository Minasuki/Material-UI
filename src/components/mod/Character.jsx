import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Character = ({ name, image }) => {
  return (
    <Card>
      <CardMedia
        image={image}
        title="Un alient"
        sx={{ height: 250, width: 250 }}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </Card>
  );
};

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
