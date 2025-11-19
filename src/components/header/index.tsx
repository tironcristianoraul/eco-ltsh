import React, { useState, type JSX } from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useAuth from "../../hooks/use-auth";
import { Headerlink, HeaderWrapper } from "./index.styled";
import Logo from "../logo";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import HeaderDrawer from "../header-drawer";

const Header: React.FC = (): JSX.Element => {
  const { logout, isLoggedIn } = useAuth();
  const [open, setOpen] = useState<boolean>(false);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const nav = useNavigate();

  const toggleDrawer = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <Box display="flex" alignItems="center">
        <Logo fontSize={sm ? 16 : 48} />
      </Box>
      {!md ? (
        <>
          <Box display="flex" alignItems="center" gap={10}>
            <Headerlink to={"/"}>Acasă</Headerlink>
            <Headerlink to={"/post"}>Posts</Headerlink>
            <Headerlink to={"/plants"}>Plante</Headerlink>
          </Box>
          {!isLoggedIn ? (
            <Button variant="contained" onClick={() => nav("/sign-in")}>
              <Typography>Sign In</Typography>
            </Button>
          ) : (
            <>
              <Stack direction="row" gap={4}>
                <Headerlink to={"/add"}>Add Post</Headerlink>
                <Headerlink to={"/add-plant"}>Add Plant</Headerlink>
              </Stack>
              <Tooltip title="Delogare">
                <IconButton color="primary" onClick={logout}>
                  <LogoutOutlinedIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
        </>
      ) : (
        <>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon color="primary" />
          </IconButton>
          <HeaderDrawer open={open} toggleDrawer={toggleDrawer} />
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
