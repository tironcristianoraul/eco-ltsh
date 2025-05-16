import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import Views from './views'
import theme from './utils/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Views />
    </ThemeProvider>
  )
}

export default App
