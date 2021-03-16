import { Button, IconButton } from '@chakra-ui/button'
import { Box, Container, Flex } from '@chakra-ui/layout'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { Logo } from '../assets'
import { useColorMode } from '@chakra-ui/color-mode'
import { useNewTransactionModal } from '../hooks'

const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  const ColorIcon = colorMode === 'light' ? MoonIcon : SunIcon

  const { onOpen } = useNewTransactionModal()

  return (
    <Box background="primary.purple">
      <Container maxWidth="desktop">
        <Flex justifyContent="space-between" py={8} pb={32}>
          <Logo />
          <Flex>
            <Button
              variant="primary"
              background="primary.lightPurple"
              onClick={onOpen}
            >
              Nova transação
            </Button>
            <IconButton
              ml={3}
              variant="primary"
              aria-label="Toggle theme"
              icon={<ColorIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
