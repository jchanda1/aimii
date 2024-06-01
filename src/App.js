import { Provider } from "react-redux";
import { store } from "./store";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { grey, pink } from "@mui/material/colors";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const myTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: pink[500],
      },
      secondary: {
        main: grey[500],
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Provider store={store}>
        <HomePage />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
