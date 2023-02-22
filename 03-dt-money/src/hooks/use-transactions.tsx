import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

export type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: Date;
};

type TransactionContextData = {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
};

const TransactionsContext = createContext({} as TransactionContextData);

export const TransactionsProvider = ({ children }: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async (query?: string) => {
    const url = new URL("http://localhost:3333/transactions");
    if (query) {
      url.searchParams.append("q", query);
    }
    const response = await fetch(url);
    const data = await response.json();
    setTransactions(
      data.map((transaction: Transaction) => ({ ...transaction, createdAt: new Date(transaction.createdAt) }))
    );
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  return useContext(TransactionsContext);
}
