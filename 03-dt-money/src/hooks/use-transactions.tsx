import { api } from "@/lib/axios";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

export type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: Date;
};

type ApiTransaction = Omit<Transaction, "createdAt"> & { createdAt: string };
type CreateTransactionData = Omit<Transaction, "id" | "createdAt">;

type TransactionContextData = {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionData) => Promise<void>;
};

const TransactionsContext = createContext({} as TransactionContextData);

export const TransactionsProvider = ({ children }: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async (query?: string) => {
    const { data } = await api.get<ApiTransaction[]>("/transactions", {
      params: { _sort: "createdAt", _order: "DESC", q: query },
    });
    setTransactions(data.map(transaction => ({ ...transaction, createdAt: new Date(transaction.createdAt) })));
  };

  const createTransaction = async (transaction: CreateTransactionData) => {
    const { data } = await api.post<ApiTransaction>("/transactions", {
      ...transaction,
      createdAt: new Date(),
    });
    const newTransaction = { ...data, createdAt: new Date(data.createdAt) };
    setTransactions(state => [newTransaction, ...state]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  return useContext(TransactionsContext);
}
