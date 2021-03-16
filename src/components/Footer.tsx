import { IconButton } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, Link } from '@chakra-ui/layout'

import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const iconColor = useColorModeValue('gray.600', 'gray.50')

  return (
    <Flex justifyContent="center">
      <Link
        _hover={{
          opacity: 1,
        }}
        opacity={0.8}
        transition="opacity .2s ease-out"
        href="https://github.com/aldroydzito/dtmoney-chakra"
        target="_blank"
        color={iconColor}
      >
        <IconButton size="lg" aria-label="GitHub" icon={<FaGithub />} />
      </Link>
    </Flex>
  )
}

export default Footer
