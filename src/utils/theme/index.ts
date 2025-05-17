import { createTheme, type ThemeOptions } from "@mui/material";

const common: ThemeOptions = {
  palette: {
    primary: {
      main: "#24641C",
    },

    secondary: {
      light: "#2a8017",
      main: "#448613",
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
