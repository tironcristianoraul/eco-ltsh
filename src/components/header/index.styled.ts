import { Box, styled, type BoxProps } from "@mui/material";
import type { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

const HeaderWrapper: FC<BoxProps> = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  marginTop: "8px",
}));

const Headerlink: FC<LinkProps> = styled(Link)(() => ({
  textDecoration: "none",
  color: "#8ec07c ",
  fontSize: 20,
}));

export { HeaderWrapper, Headerlink };
