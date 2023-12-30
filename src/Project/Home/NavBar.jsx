import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

const pages = ["Home", "About us", "Services"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "lightgreen" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            src="data:image/jpeg;base64,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"
            alt="FloraFiesta"
            sx={{ mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "cursive",
              fontWeight: 800,
              color: "black",
              textDecoration: "none",
            }}
          >
            FloraFiesta
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            //href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "cursive",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            FloraFiesta
          </Typography>
          <Box
            sx={{
              fontWeight: 500,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  fontFamily: "cursive",
                  fontWeight: 500,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Link to="/">
            <Button
              variant="contained"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                fontWeight: 500,
              }}
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
