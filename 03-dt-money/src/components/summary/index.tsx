import { useTheme } from "styled-components";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { Transaction, useTransactions } from "@/hooks/transactions";
import { formatMoney } from "@/utils/format-money";

function summarizeTransactions(transactions: Transaction[]) {
  let income = 0;
  let outcome = 0;
  for (const transaction of transactions) {
    if (transaction.type === "income") {
      income += transaction.price;
    } else {
      outcome += transaction.price;
    }
  }
  return { income, outcome, total: income - outcome };
}

export function Summary() {
  const { transactions } = useTransactions();
  const { income, outcome, total } = summarizeTransactions(transactions);
  const theme = useTheme();
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme["green-300"]} />
        </header>
        <strong>{formatMoney(income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme["red-300"]} />
        </header>
        <strong>{formatMoney(outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color={theme["white"]} />
        </header>
        <strong>{formatMoney(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
