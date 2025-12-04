import { Box, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router";

type Props = {
  fontSize: number;
};

const StyledBox = styled(Box)({
  cursor: "pointer",
});

const Logo = ({ fontSize }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledBox
      sx={{ display: "flex", alignItems: "center" }}
      onClick={() => navigate("/")}
    >
      <Typography
        fontWeight="bold"
        fontSize={fontSize}
        color="#15a349"
        sx={{ WebkitTextStroke: "1px black" }}
      >
        Eco - LTSH
      </Typography>
    </StyledBox>
  );
};

export default Logo;
