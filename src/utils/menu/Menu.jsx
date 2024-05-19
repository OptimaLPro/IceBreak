import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/LogoResize.png";
import BurgerMenu from "./components/BurgerMenu";

const StyledMenuItem = styled(MenuItem)({
  textDecoration: "none",
});

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <StyledMenuItem component={Link} to="/profile">
        Profile
      </StyledMenuItem>
      <StyledMenuItem component={Link} to="/signin">
        Sign In
      </StyledMenuItem>
      <StyledMenuItem component={Link} to="/signup">
        Sign Up
      </StyledMenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: "10px", width: "100%" }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: { xs: "space-between", md: "flex" } }}>
          {<BurgerMenu />}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            IceBreak
          </Typography>
          <Link to="/">
            <img
              src={Logo}
              alt={Logo}
              style={{
                width: "60px",
                height: "50px",
                textDecoration: "none",
                marginTop: "10px",
              }}
              loading="lazy"
            />
          </Link>
          <Box
            sx={{
              flexGrow: { xs: 0, md: 1 },
              display: { xs: "none", md: "block" },
            }}
          />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize="large" sx={{ marginRight: "7px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
