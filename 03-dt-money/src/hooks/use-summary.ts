import { useMemo } from "react";
import { useTransactions } from "./use-transactions";

export function useSummary() {
  const { transactions } = useTransactions(["transactions"]);
  const { income, outcome } = useMemo(() => {
    let income = 0;
    let outcome = 0;
    for (const transaction of transactions) {
      if (transaction.type === "income") {
        income += transaction.price;
      } else {
        outcome += transaction.price;
      }
    }
    return { income, outcome };
  }, [transactions]);
  return { income, outcome, total: income - outcome };
}
