import { Card, styled } from "@mui/material";

const CardBase = styled(Card)(({ theme }) => ({
  minWidth: "90%",
  maxWidth: "90%",
  maxHeight: "300px",
  minHeight: "300px",
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
  margin: "10px",
  border: `4px solid ${theme.palette.secondary.main}`, // Fixed typo and removed invalid character
}));

export default CardBase;
