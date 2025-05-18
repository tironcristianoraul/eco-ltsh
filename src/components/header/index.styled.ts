import { Box, styled, type BoxProps } from "@mui/material";
import type { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

const HeaderWrapper: FC<BoxProps> = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
}));

const Headerlink: FC<LinkProps> = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontSize: 20,
  font: theme.typography.fontFamily,
  ':hover': {
    textDecoration: 'underline'
  }
}));

export { HeaderWrapper, Headerlink };
