import { Summary } from "@/components/summary";
import { Header } from "@/components/header";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { SearchForm } from "./components/search-form";
import { useTransactions } from "@/hooks/use-transactions";
import { formatMoney } from "@/utils/format-money";
import { formatDate } from "@/utils/format-date";

export function Transactions() {
  const { transactions } = useTransactions();
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {formatMoney(transaction.type === "income" ? transaction.price : -transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate(transaction.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
