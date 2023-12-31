import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  "/Material-UI/BluuCard",
  "/Material-UI/CajitaFlex",
  "/Material-UI/CajitaGrid",
  "/Material-UI/Productos",
  "/Material-UI/ValidarFormulario",
  "/Material-UI/Practica",
  "/Material-UI/FireBase",
];

function MenuNavegacion(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link
          to="Material-UI/"
          style={{ textDecoration: "none", color: "Black" }}
        >
          MUI
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          const segments = item.split("/");
          const lastSegment = segments[segments.length - 1];
          return (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link
                  to={item}
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <ListItemText primary={lastSegment} />
                </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              to="Material-UI/"
              style={{ textDecoration: "none", color: "white" }}
            >
              MUI
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              const segments = item.split("/");
              const lastSegment = segments[segments.length - 1];

              return (
                <Link key={item} to={item}>
                  <Button sx={{ color: "#fff" }}>{lastSegment}</Button>
                </Link>
              );
            })}
            <Outlet />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

MenuNavegacion.propTypes = {
  window: PropTypes.func,
};

export default MenuNavegacion;
