import { api } from "@/lib/axios";
import { PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

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

export const TransactionsContext = createContext({} as TransactionContextData);

export const TransactionsProvider = ({ children }: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get<ApiTransaction[]>("/transactions", {
      params: { _sort: "createdAt", _order: "DESC", q: query },
    });
    setTransactions(data.map(transaction => ({ ...transaction, createdAt: new Date(transaction.createdAt) })));
  }, []);

  const createTransaction = useCallback(async (transaction: CreateTransactionData) => {
    const { data } = await api.post<ApiTransaction>("/transactions", {
      ...transaction,
      createdAt: new Date(),
    });
    const newTransaction = { ...data, createdAt: new Date(data.createdAt) };
    setTransactions(state => [newTransaction, ...state]);
  }, []);

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

// export const useTransactions = (
//   fields: Array<keyof TransactionContextData>
// ): { [k in (typeof fields)[number]]: TransactionContextData[k] } => {
//   return useContextSelector(TransactionsContext, context => {
//     return fields.reduce(
//       (acc, field) => ({
//         ...acc,
//         [field]: context[field],
//       }),
//       {}
//     );
//   }) as any;
// };

// export const useTransactions = (
//   field: keyof TransactionContextData
// ): { [k: typeof field]: TransactionContextData[k] } => {
//   return useContextSelector(TransactionsContext, context => {
//     return { [field]: context[field] };
//   });
// };
