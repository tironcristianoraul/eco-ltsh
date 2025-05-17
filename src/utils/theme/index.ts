import { createTheme, type ThemeOptions } from "@mui/material";

const common: ThemeOptions = {
  palette: {
    primary: {
      main: "#24641C",
    },

    secondary: {
      main: "#3bb021",
      light: "#89e346",
      dark: "#206610",
      
    },
  },
  typography: {
    fontFamily: "PT Sans Caption, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
};

const theme = createTheme(common);

export default theme;
