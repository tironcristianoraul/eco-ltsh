import { createTheme, type ThemeOptions } from "@mui/material";

const common: ThemeOptions = {
  palette: {
    primary: {
      main: "#24641C",
      dark: "#74c23a",
    },

    secondary: {
      main: "#328c19",
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
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
        disableRipple: true
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
    MuiTypography: {
      defaultProps: {
        fontWeight: 500,
      },
    },
  }
};

const theme = createTheme(common);

export default theme;
