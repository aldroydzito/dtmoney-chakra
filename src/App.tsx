import { Box, ChakraProvider, Container, Flex, Stack } from '@chakra-ui/react'
import Header from './components/Header'
import Summary from './components/Summary'
import Transactions from './components/Transactions'
import NewTransactionModal from './components/NewTransactionModal'
import theme from './styles/theme'
import { NewTransactionModalProvider } from './hooks/useNewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'
import Footer from './components/Footer'

import { makeServer } from './server'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TransactionsProvider>
        <NewTransactionModalProvider>
          <Flex direction="column" height="100vh">
            <Header />
            <Container flex={1} maxWidth="desktop" mt={10}>
              <Stack spacing={8}>
                <Summary />
                <Transactions />
                <NewTransactionModal />
              </Stack>
            </Container>
            <Box py={10}>
              <Footer />
            </Box>
          </Flex>
        </NewTransactionModalProvider>
      </TransactionsProvider>
    </ChakraProvider>
  )
}

export default App
