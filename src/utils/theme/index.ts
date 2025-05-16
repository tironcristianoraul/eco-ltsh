import { createTheme, type ThemeOptions } from '@mui/material';

const common: ThemeOptions = {
    palette: {
        primary: {
            main: '#8ec07c'
        },
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
