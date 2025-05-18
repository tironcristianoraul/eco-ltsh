import { Box, styled } from "@mui/material";

const EditorWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: '900px',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}));

export { EditorWrapper };