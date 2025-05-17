import { createTheme, type ThemeOptions } from "@mui/material";

const common: ThemeOptions = {
  palette: {
    primary: {
      main: "#24641C",
    },

    secondary: {
      main: "#2a8017",
      light: "#448613",
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
