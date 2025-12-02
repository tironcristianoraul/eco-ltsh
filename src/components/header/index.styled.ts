import { AppBar, Box, Button, styled } from "@mui/material";
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
});

const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  "&:hover": {
    "& .logo-icon": {
      transform: "rotate(15deg)",
    },
  },
});

const LogoIcon = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: "#16a34a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease",
});

const NavButton = styled(Button)({
  color: "#334155",
  fontWeight: 500,
  textTransform: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "#dcfce7",
    color: "#16a34a",
  },
});

const SignInButton = styled(Button)({
  backgroundColor: "#16a34a",
  color: "#ffffff",
  fontWeight: 600,
  textTransform: "none",
  padding: "8px 20px",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "#15803d",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)",
  },
});

const AddButton = styled(Button)({
  backgroundColor: "#dcfce7",
  color: "#16a34a",
  fontWeight: 600,
  textTransform: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "#bbf7d0",
  },
});

const DrawerHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px",
  backgroundColor: "#f0fdf4",
});
export { StyledAppBar, Logo, LogoIcon, NavButton, SignInButton, AddButton, DrawerHeader };