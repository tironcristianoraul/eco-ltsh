import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DrawerHeader } from "./index.styled";
import Logo from "../logo";
import { type Dispatch, type SetStateAction } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NatureIcon from "@mui/icons-material/Nature";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../hooks/use-auth";

type HeaderDrawerProps = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const HeaderDrawer = ({ setDrawerOpen }: HeaderDrawerProps) => {

  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

    const navItems = [
    { label: "Home", icon: <HomeIcon />, onClick: () => navigate("/") },
    { label: "Activities", icon: <NatureIcon />, onClick:   () => navigate("/post") },
    { label: "Plants", icon: <LocalFloristIcon />, onClick: () => navigate("/plants") },
  ];

  const authItems = isLoggedIn
    ? [
        { label: "Add Activity", icon: <AddIcon />, onClick: () => navigate("/add") },
        { label: "Add Plant", icon: <AddIcon />, onClick: () => navigate("/add-plant") },
        { label: "Logout", icon: <LogoutIcon />, onClick: () => logout() },
      ]
    : [{ label: "Sign In", icon: <LoginIcon />, onClick: () => navigate("/sign-in") }];

    return (
    <Box sx={{ width: 280 }} role="presentation">
      <DrawerHeader>
        <Logo fontSize={16}/>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: "#334155" }}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => {
                item.onClick?.();
                setDrawerOpen(false);
              }}
              sx={{
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#dcfce7",
                  "& .MuiListItemIcon-root": { color: "#16a34a" },
                  "& .MuiListItemText-primary": { color: "#16a34a" },
                },
              }}
            >
              <ListItemIcon sx={{ color: "#64748b", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: "#334155",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {authItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => {
                item.onClick?.();
                setDrawerOpen(false);
              }}
              sx={{
                py: 1.5,
                backgroundColor: isLoggedIn ? "#f0fdf4" : "transparent",
                "&:hover": {
                  backgroundColor: isLoggedIn ? "#dcfce7" : "#dcfce7",
                  "& .MuiListItemIcon-root": { color: "#16a34a" },
                  "& .MuiListItemText-primary": { color: "#16a34a" },
                },
              }}
            >
              <ListItemIcon
                sx={{ color: isLoggedIn ? "#16a34a" : "#64748b", minWidth: 40 }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: isLoggedIn ? "#16a34a" : "#334155",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default HeaderDrawer;   