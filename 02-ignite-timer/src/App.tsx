import { ThemeProvider } from "styled-components";

import { Router } from "@/router";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";

import { CyclesProvider } from "./contexts/cycles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesProvider>
        <Router />
      </CyclesProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
