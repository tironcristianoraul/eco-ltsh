import { Box, styled, Input, Typography } from "@mui/material";

export const SignInBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  backgroundColor: "rgba(190, 232, 174, 0.6)",
  backdropFilter: "blur(5px)",
  boxShadow: "0 4px 20px (0, 0, 0, 0.3)",
  height: "clamp(200px, 40vh, 500px)",
  width: "clamp(300px, 50vw, 500px)",
}));

export const SignInInfo = styled(Input)(() => ({
  backgroundColor: "rgba(196, 224, 186, 0.6)",
  backdropFilter: "blur(5px)",
  borderRadius: "12px",
  padding: 4,
}));

export const EcoLtshLogo = styled(Typography)(() => ({
  color: "#37871a",
}));
