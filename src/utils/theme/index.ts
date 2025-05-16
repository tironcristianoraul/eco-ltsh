import { createTheme, type ThemeOptions } from '@mui/material';

const common: ThemeOptions = {
    palette: {
        primary: {
            main: '#40a02b'
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
