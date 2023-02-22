import { Header } from "@/components/header";
import { Summary } from "@/components/summary";
import { useTransactions } from "@/hooks/use-transactions";
import { formatDate } from "@/utils/format-date";
import { formatMoney } from "@/utils/format-money";
import { SearchForm } from "./components/search-form";
import { PriceHighlight, TransactionsContainer, TransactionsTable, TransactionsTableContainer } from "./styles";

export function Transactions() {
  const { transactions } = useTransactions(["transactions"]);
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTableContainer>
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
        </TransactionsTableContainer>
      </TransactionsContainer>
    </>
  );
}
