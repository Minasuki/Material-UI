import {
  AppBar,
  Box,
  Button,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Theme from "./Theme";

// const useStyles = makeStyles((theme) => ({
//   offset: theme.mixins.toolbar,
//   menuButton: {
//     marginRight: theme.spacing(2),
//     title:{
//       flexGrow:1,
//     }
//   },
// }));

const Navbar = () => {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={Theme}>
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Hola
          </Typography>
          <Button variant="text" color="error">pito</Button>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.offset}></div> */}
    </Box>
    </ThemeProvider>
  );
};

export default Navbar;
