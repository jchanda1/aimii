import { Provider } from "react-redux";
import { store } from "./store";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { pink } from "@mui/material/colors";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const myTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: pink[500],
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
