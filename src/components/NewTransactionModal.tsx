import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'
import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import { RadioGroup, useRadioGroup } from '@chakra-ui/radio'
import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input'

import { useNewTransactionModal, useTransactions } from '../hooks'
import RadioButtons from './RadioButtons'

import { Income, Outcome } from '../assets'

const NewTransactionModal = (): JSX.Element => {
  const { isOpen, onClose } = useNewTransactionModal()
  const { createTransaction } = useTransactions()

  const options = [
    {
      value: 'income',
      label: 'Entrada',
      icon: Income,
    },
    {
      value: 'outcome',
      label: 'Saída',
      icon: Outcome,
    },
  ]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'type',
    defaultValue: 0,
  })

  const group = getRootProps()
  const titleColor = useColorModeValue('secondary.title', 'inherit')

  const handleCreateNewTransaction = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      title: { value: string }
      price: { value: string }
      type: { value: string }
      category: { value: string }
    }

    const title = target.title.value
    const price = Number(target.price.value)
    const type = target.type.value
    const category = target.category.value

    const data = { title, price, type, category }

    await createTransaction(data)

    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent py={5}>
        <ModalHeader color={titleColor}>Cadastrar transação</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleCreateNewTransaction}>
            <Stack spacing={3}>
              <Input name="title" placeholder="Título" size="md" py={6} />

              <InputGroup alignItems="stretch">
                <InputLeftAddon children="R$" py={6} />
                <NumberInput
                  flex={1}
                  name="price"
                  type="number"
                  min={1}
                  keepWithinRange={false}
                  clampValueOnBlur={false}
                >
                  <NumberInputField
                    rounded="none"
                    roundedRight="md"
                    py={6}
                    placeholder="Preço"
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </InputGroup>
              <SimpleGrid
                as={RadioGroup}
                name="type"
                columns={options.length}
                gap={3}
                {...group}
              >
                {options.map((option) => {
                  const radio = getRadioProps({ value: option.value })
                  return (
                    <RadioButtons key={option.value} {...radio}>
                      <Flex justifyContent="center" alignItems="center">
                        <Box as={option.icon} width={4} height={4} />
                        <Text ml={2}>{option.label}</Text>
                      </Flex>
                    </RadioButtons>
                  )
                })}
              </SimpleGrid>
              <Input name="category" placeholder="Categoria" size="md" py={6} />
              <Button
                type="submit"
                variant="primary"
                background="primary.green"
                color="green.50"
                p={7}
              >
                Cadastrar
              </Button>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NewTransactionModal
