'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from '../ui/color-mode'
import theme from './theme'

export function ThemeProvider(props) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
