import { Box, styled, type BoxProps } from "@mui/material";
import type { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

const HeaderWrapper: FC<BoxProps> = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "#fff",
}));

const Headerlink: FC<LinkProps> = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontSize: 20,
  font: theme.typography.fontFamily,
  ":hover": {
    backgroundColor: `${theme.palette.primary.main}`,
    color: "#fff",
  },
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "12px",
  paddingLeft: 6,
  paddingRight: 6,
  textDecorationLine: "none",
}));

export { HeaderWrapper, Headerlink };
