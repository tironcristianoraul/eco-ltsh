import { Card, styled } from "@mui/material";

const CardBase = styled(Card)(({theme}) => ({
  minWidth: "300px",
  maxWidth: "300px",
  maxHeight: "400px",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
  border: `4px solid ${theme.palette.secondary.main}`　// sloid 🥀
}));

export default CardBase;