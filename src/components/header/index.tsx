import React, { useState, type JSX } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useAuth from "../../hooks/use-auth";
import { AddButton, NavButton, SignInButton, StyledAppBar } from "./index.styled";
import Logo from "../logo";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import NatureIcon from "@mui/icons-material/Nature";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import HeaderDrawer from "./drawer";
import LogoutIcon from "@mui/icons-material/Logout";

const Header: React.FC = (): JSX.Element => {
  const { logout, isLoggedIn } = useAuth();

   const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

   const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

     const navItems = [
    { label: "Home", icon: <HomeIcon />, onClick: () => navigate("/") },
    { label: "Activities", icon: <NatureIcon />, onClick:   () => navigate("/post") },
    { label: "Plants", icon: <LocalFloristIcon />, onClick: () => navigate("/plants") },
  ];

 return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        {/* Logo */}
        <Logo fontSize={isMobile ? 18 : 36} />

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <NavButton
                  key={item.label}
                  startIcon={item.icon}
                  onClick={item.onClick}
                >
                  {item.label}
                </NavButton>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1.5 }}>
              {isLoggedIn ? (
                <>
                  <AddButton
                    startIcon={<AddIcon />}
                    onClick={() => navigate("/add")}
                  >
                    Add Activity
                  </AddButton>
                  <AddButton startIcon={<AddIcon />} onClick={() => navigate("/add-plant")}>
                    Add Plant
                  </AddButton>
                   <NavButton startIcon={<LogoutIcon />} onClick={() => logout()}>
                    Logout
                  </NavButton>
                </>
              ) : (
                <SignInButton startIcon={<LoginIcon />} onClick={() => navigate("/sign-in")}>
                  Sign In
                </SignInButton>
              )}
            </Box>
          </>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{
              color: "#334155",
              "&:hover": {
                backgroundColor: "#dcfce7",
                color: "#16a34a",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <HeaderDrawer setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </StyledAppBar>
  );
};

export default Header;
