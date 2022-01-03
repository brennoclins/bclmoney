import  { useEffect, useState, createContext, ReactNode } from 'react';

import { api } from "./services/api";

interface Transaction {
  id: number;
  title:string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsoviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsoviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
   api.get('transactions').then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}