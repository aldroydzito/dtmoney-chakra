import { createContext, useContext } from 'react'

import { useDisclosure } from '@chakra-ui/hooks'

interface NewTransactionModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

interface NewTransactionModalProviderProps {
  children: React.ReactNode
}

const NewTransactionModalContext = createContext({} as NewTransactionModalProps)

export const NewTransactionModalProvider = ({
  children,
}: NewTransactionModalProviderProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <NewTransactionModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </NewTransactionModalContext.Provider>
  )
}

const useNewTransactionModal = () => {
  const context = useContext(NewTransactionModalContext)

  return context
}

export default useNewTransactionModal
