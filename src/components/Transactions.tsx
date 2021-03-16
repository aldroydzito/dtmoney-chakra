import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { useTransactions } from '../hooks'
import { currencyFormatter, dateFormatter } from '../utils'

const Transactions = (): JSX.Element => {
  const { transactions } = useTransactions()

  return (
    <Table variant="transactions">
      <Thead>
        <Tr>
          <Th>Título</Th>
          <Th>Preço</Th>
          <Th>Categoria</Th>
          <Th>Data</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((transaction) => {
          const isIncome = transaction.type === 'income'

          return (
            <Tr key={transaction.id}>
              <Td>{transaction.title}</Td>
              <Td color={isIncome ? 'primary.green' : 'primary.red'}>
                {isIncome ? '+' : '-'}{' '}
                {currencyFormatter.format(transaction.price)}
              </Td>
              <Td>{transaction.category}</Td>
              <Td>{dateFormatter.format(new Date(transaction.created_at))}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default Transactions
