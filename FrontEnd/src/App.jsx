import { Button, CssBaseline, Switch, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { darkTheme } from "./styles/darkTheme";
import { lightTheme } from "./styles/lightTheme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Button onClick={() => setDarkMode(!darkMode)}>switchMode</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="primary">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </ThemeProvider>
  );
}

export default App;
