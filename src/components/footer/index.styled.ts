import { Box, styled } from "@mui/material";

const FooterBase = styled(Box)(({ theme }) => ({
  width: "100vw",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: 4,
  backgroundColor: theme.palette.secondary.light,
  marginTop: "auto",
  placeSelf: "flex-end",
  justifySelf: "flex-end",
  alignSelf: "flex-end",
}));

export default FooterBase;
