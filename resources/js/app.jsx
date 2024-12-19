import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Router from "./routes/Router";
import 'nprogress/nprogress.css';
import { ThemeProviderCustom } from "./layouts/ThemeProviderCustom";



function App() {

  return (

    <ThemeProviderCustom>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProviderCustom>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
