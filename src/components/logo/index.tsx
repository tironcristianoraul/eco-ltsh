import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

type Props = {
  fontSize: number;
};

const Logo = ({ fontSize }: Props) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      onClick={() => navigate("/")}
    >
      <Typography
        fontWeight="bold"
        fontSize={fontSize}
        color="primary"
        sx={{ WebkitTextStroke: "1px black" }}
      >
        Eco - L🌲SH
      </Typography>
    </Box>
  );
};

export default Logo;
