import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box } from '@chakra-ui/layout'
import { useRadio, UseRadioProps } from '@chakra-ui/radio'

interface RadioButtonsProps extends UseRadioProps {
  children: React.ReactNode
}

const RadioButtons = (props: RadioButtonsProps): JSX.Element => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  const bgButton = useColorModeValue('gray.100', 'gray.600')

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        fontSize="sm"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        transition="background .1s ease-out"
        _checked={{
          bg: bgButton,
        }}
        px={5}
        py={4}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default RadioButtons
