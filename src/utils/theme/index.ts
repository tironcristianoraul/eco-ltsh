import { createTheme, type ThemeOptions } from '@mui/material';

const common: ThemeOptions = {
    palette: {
        primary: {
            main: '#40a02b'
        },

        secondary: {
            main: '#2a8017',
            light: '#a5ed74'
        }
    },
    typography: {
        fontFamily: 'PT Sans Caption, sans-serif',
    },
    shape: {
        borderRadius: 10,
    },
};

const theme = createTheme(common);

export default theme;
