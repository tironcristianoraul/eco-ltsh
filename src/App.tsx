import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Views from "./views";
import theme from "./utils/theme";
import Snackbar from "./components/snackbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Views />
      <Snackbar />
    </ThemeProvider>
  );
}

export default App;
