'use client'

import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme'
import { ColorModeProvider } from '../ui/color-mode'

export function ThemeProvider(props) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
