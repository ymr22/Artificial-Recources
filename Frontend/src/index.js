import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <App />
      </ThemeProvider>
  </BrowserRouter>
);
