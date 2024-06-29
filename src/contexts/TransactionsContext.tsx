import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  createdAt: string
  id: number
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })
    setTransactions(response.data)
  }
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
