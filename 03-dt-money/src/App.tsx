import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./hooks/transactions";
import { Transactions } from "./pages/transactions";
import { GlobalSyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
