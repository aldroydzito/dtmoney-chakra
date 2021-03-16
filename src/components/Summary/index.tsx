import { SimpleGrid } from '@chakra-ui/layout'
import Item from './Item'

import { Income, Outcome, Total } from '../../assets'
import { useTransactions } from '../../hooks'

const Summary = (): JSX.Element => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.deposits += transaction.price
        acc.total += transaction.price
      } else {
        acc.withdraws += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  )

  return (
    <SimpleGrid columns={[1, 1, 3]} gap={6} mt={-24}>
      <Item title="Entradas" icon={Income} amount={summary.deposits} />
      <Item title="Saídas" icon={Outcome} amount={summary.withdraws} />
      <Item title="Total" icon={Total} amount={summary.total} highlight />
    </SimpleGrid>
  )
}

export default Summary
