import { Summary } from "@/components/summary";
import { Header } from "../../components/header";
import { TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
    </TransactionsContainer>
  );
}
