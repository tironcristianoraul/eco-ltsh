import { Card, CardMedia, styled, type CardMediaProps } from "@mui/material";
import type { FC } from "react";

export const StyledCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  transition: "all 0.3s ease",
  backgroundColor: "#ffffff",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[12],
    "& .card-image": {
      transform: "scale(1.1)",
    },
    "& .card-title": {
      color: "#16a34a",
    },
  },
}));

export const StyledCardMedia = styled(CardMedia as FC<CardMediaProps>)({
  transition: "transform 0.3s ease",
  objectFit: "cover",
});

