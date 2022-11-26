import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyle";

const theme = {
  colors: {
    purple: "#c2b2d3",
  },
  spacing: (value) => `${4 * value}px`,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
