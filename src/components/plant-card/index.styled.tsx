import { Card, styled } from "@mui/material";

export const StyledPlantCard = styled(Card)(() => ({
  width: 200,
  margin: 20,
  padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  ":hover": {
    cursor: "pointer",
  },
}));
