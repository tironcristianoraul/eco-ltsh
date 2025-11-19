import { Typography } from "@mui/material";
import FooterBase from "./index.styled";

const Footer = () => {
  return (
    <FooterBase>
      <Typography
        sx={{ wordBreak: "break-word", textAlign: "center" }}
        fontWeight="bold"
      >
        Made with ❤️ by Tiron Cristiano Raul, Buta Sebastian Laurențiu, Pop
        Eugen Roberto and Mogin Ionuț Florin. (cls. a XII - a A){" "}
        {new Date().getFullYear()}
      </Typography>
    </FooterBase>
  );
};

export default Footer;
