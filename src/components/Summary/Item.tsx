import { useEffect, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { animate, useMotionValue } from 'framer-motion'

import { currencyFormatter } from '../../utils'

interface ItemProps {
  title: string
  icon: any
  amount: number
  highlight?: boolean
}

const Item = ({
  title,
  icon: Icon,
  amount,
  highlight,
}: ItemProps): JSX.Element => {
  const [animatedAmount, setAnimatedAmount] = useState(0)
  const fromTotal = useMotionValue(0)

  const highlightColor = amount >= 0 ? 'primary.green' : 'primary.red'

  const bgColor = useColorModeValue('secondary.shape', 'gray.700')
  const textColor = useColorModeValue('secondary.title', 'gray.200')

  useEffect(() => {
    const controls = animate(fromTotal, amount, {
      delay: 0.5,
      duration: 0.75,
      ease: 'easeInOut',
      onUpdate: (value) => {
        setAnimatedAmount(Math.floor(value))
      },
    })

    return controls.stop
  }, [fromTotal, amount])

  return (
    <Box
      shadow="sm"
      background={highlight ? highlightColor : bgColor}
      color={highlight ? 'white' : textColor}
      p={5}
      rounded="md"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="400">{title}</Text>
        <Box as={Icon} width={6} height={6} />
      </Flex>
      <Text mt={2} fontSize={['xl', 'xl', '3xl']}>
        {currencyFormatter.format(animatedAmount)}
      </Text>
    </Box>
  )
}

export default Item
