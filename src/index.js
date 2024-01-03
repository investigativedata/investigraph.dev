import React from "react";
import { createRoot } from "react-dom/client";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import "@fontsource/inter";

import App from "./App";

function AppWrapper() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<AppWrapper />);
