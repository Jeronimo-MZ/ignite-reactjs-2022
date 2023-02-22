import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/transactions";
import { GlobalSyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyle />

      <Transactions />
    </ThemeProvider>
  );
}
