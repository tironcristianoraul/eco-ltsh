import { Box, Typography } from "@mui/material";

type Props = {
  fontSize: number;
};

const Logo = ({ fontSize }: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        fontWeight="bold"
        fontSize={fontSize}
        color="primary"
        sx={{ WebkitTextStroke: "1px black" }}
      >
        Eco - LTSH
      </Typography>
    </Box>
  );
};

export default Logo;
