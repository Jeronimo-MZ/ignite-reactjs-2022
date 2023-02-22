import { useTheme } from "styled-components";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { formatMoney } from "@/utils/format-money";
import { useSummary } from "@/hooks/use-summary";

export function Summary() {
  const { income, outcome, total } = useSummary();
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
          <span>Total</span>
          <CurrencyDollar size={32} color={theme["white"]} />
        </header>
        <strong>{formatMoney(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
