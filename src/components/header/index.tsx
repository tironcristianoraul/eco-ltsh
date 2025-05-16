import React, { type JSX } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useAuth from "../../hooks/use-auth";
import { Headerlink, HeaderWrapper } from "./index.styled";
import Logo from "../logo";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Header: React.FC = (): JSX.Element => {
  const { logout, isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeaderWrapper>
      <Box
        display="flex"
        alignItems="center"
        gap={sm ? 4 : 8}
        width={sm ? "100vw" : "auto"}
      >
        <Logo fontSize={sm ? 20 : 48} />
        <Box display="flex" alignItems="center" gap={sm ? 2 : 8}>
          <Headerlink to={"/"}>Home</Headerlink>
          <Headerlink to={"/post/1"}>Posts</Headerlink>
        </Box>
      </Box>
      {!isLoggedIn ? (
        <Button variant="contained">
          <Typography>Sign In</Typography>
        </Button>
      ) : (
        <>
          <Headerlink to={"/add"}>Add</Headerlink>
          <IconButton color="primary" onClick={logout}>
            <LogoutOutlinedIcon />
          </IconButton>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
