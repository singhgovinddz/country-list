import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from "./components/HomePage";
import { Box } from "@mui/material";

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = createTheme({
    palette: { 
      mode: isDarkTheme ? 'dark' : 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{
          bgcolor: 'background.default', 
          color: 'text.primary',
          width:"100%", 
          height: "calc(100vh - 0px)",
          overflow: "hidden",
          overflowY: "auto"
        }} >
        <HomePage
          onChangeTheme={() => setIsDarkTheme(pre => !pre)}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
