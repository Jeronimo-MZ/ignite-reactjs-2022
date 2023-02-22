import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalSyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyle />

      <h1>Hello World</h1>
    </ThemeProvider>
  );
}
