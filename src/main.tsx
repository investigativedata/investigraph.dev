import React from "react";
import ReactDOM from "react-dom/client";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { theme } from "@investigativedata/style";
import Page from "./Page";
import './index.css';

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Page />
    </CssVarsProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
