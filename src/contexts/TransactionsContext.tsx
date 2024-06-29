import { ReactNode, createContext, useEffect, useState } from 'react'

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
    loadTransactions()
  }, [])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = (await response.json()) as Transaction[]

    setTransactions(data)
  }
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
