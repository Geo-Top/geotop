/* eslint-disable react/prop-types */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
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
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TranslateIcon from "@mui/icons-material/Translate";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import MenuComp from "./MenuComp";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Services", "Our Projects", "Careers", "Contact Us"];

// eslint-disable-next-line react/prop-types
export default function Header({
  handleDrawerToggle,
  mobileOpen,
  setMode,
  theme,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);

  const handleMenuClick = (event, anchor) => {
    if (anchor === "services") {
      setServicesAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = (anchor) => {
    if (anchor === "services") {
      setServicesAnchorEl(null);
    } else {
      setAnchorEl(null);
    }
  };
  const servicesItems = [
    "GIS",
    "Website design",
    "Web Development",
    "Mobile Application",
    "RS",
    "Drone Image Processing",
    "Surveying",
    "BIM",
    "3d Modeling",
    "Graphic Design",
    "Digital Marketing",
    "Training",
  ];

  const menuItems = ["English", "عربي"];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Geo Top
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Link key={item}  to={`/${item.replace(/ /g, "").toLowerCase()}`} style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton  sx={{ color: theme.palette.blackbg.main , textAlign: "center"}}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <Typography variant="h6" sx={{ my: 2 }}>
          Services
        </Typography>
        {servicesItems.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Link key={item} to={`/${item.replace(/ /g, "").toLowerCase()}page`} style={{ textDecoration: 'none' }}>
            <ListItem  disablePadding>
              <ListItemButton  sx={{ color: theme.palette.blackbg.main , textAlign: "center"}} >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              paddingX: { xs: "0px", sm: "25px" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon sx={{ fontSize: { xs: "23px", sm: "25px" } }} />
            </IconButton>
            <Typography
              variant="h1"
              component="div"
              color="#007BFF"
              sx={{
                display: { xs: "flex", sm: "flex" },
                alignItems: "center",
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: { xs: "23px", sm: "25px" },
                }}
              >
                <img
                  style={{ width: "60px" }}
                  src="./media/Geo Top.png"
                  alt="Geo Top"
                />
                Geo Top
              </Box>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {/* // onClick={item === "Services" ? handleMenuClick : undefined} */}
              {navItems.map((item) => (
                <React.Fragment key={item}>
                  {item === "Services" ? (
                    <>
                      <Button
                        // color="inherit"
                        // sx={{ color: 'inherit'}}
                        aria-controls="services-menu"
                        aria-haspopup="true"
                        aria-expanded={servicesAnchorEl ? "true" : undefined}
                        onClick={(e) => handleMenuClick(e, "services")}
                        sx={{ color: theme.palette.blackbg.main }}
                      >
                        {item}
                      <ArrowDropDownIcon/>
                      </Button>
                      <MenuComp
                        handleClose={() => handleMenuClose("services")}
                        anchorEl={servicesAnchorEl}
                        menuItems={servicesItems}
                      />
                    </>
                  ) : (
                    <Link to={`/${item.replace(/ /g, "").toLowerCase()}`}>
                      <Button sx={{ color: theme.palette.blackbg.main }}>
                        {item}
                      </Button>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </Box>
            <Stack
              direction={"row"}
              sx={{ display: { xs: "flex", sm: "flex" } }}
            >
              <IconButton
                color="inherit"
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "dark" ? "light" : "dark"
                  );
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <LightModeOutlinedIcon
                    sx={{ fontSize: { xs: "20px", sm: "23px" } }}
                  />
                ) : (
                  <DarkModeOutlinedIcon
                    sx={{ fontSize: { xs: "20px", sm: "23px" } }}
                  />
                )}
              </IconButton>
              <IconButton
                color="inherit"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <TranslateIcon sx={{ fontSize: { xs: "20px", sm: "23px" } }} />
              </IconButton>
              <MenuComp
                handleClose={handleClose}
                anchorEl={anchorEl}
                menuItems={menuItems}
              />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}
