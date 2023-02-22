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
};

const TransactionsContext = createContext({} as TransactionContextData);

export const TransactionsProvider = ({ children }: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const response = await fetch("http://localhost:3333/transactions");
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
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  return useContext(TransactionsContext);
}
