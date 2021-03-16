import { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'

interface Transaction {
  id: number
  title: string
  category: string
  price: number
  type: string
  created_at: string
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (props: TransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps): JSX.Element => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const createTransaction = async (transactionInput: TransactionInput) => {
    if (process.env.NODE_ENV === 'development') {
      const response = await api.post('/transactions', {
        ...transactionInput,
        created_at: new Date(),
      })
      const { transaction } = response.data
      setTransactions((prev) => [...prev, transaction])
      return
    }

    const transaction = {
      ...transactionInput,
      id: transactions.length + 1,
      created_at: String(new Date()),
    }

    setTransactions((prev) => [...prev, transaction])
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      api
        .get('/transactions')
        .then((response) => setTransactions(response.data.transactions))
      return
    }

    setTransactions([
      {
        id: 1,
        title: 'Desenvolvimento de website',
        price: 3000,
        type: 'income',
        category: 'Dev',
        created_at: String(new Date()),
      },
      {
        id: 2,
        title: 'Compras da semana',
        price: 450,
        type: 'outcome',
        category: 'Mercado',
        created_at: String(new Date()),
      },
    ])
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
}

export default useTransactions
