import { createTheme, rem } from '@mantine/core'

import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: [
      '#fff0e4',
      '#ffe0cf',
      '#fac0a1',
      '#f69e6e',
      '#f28043',
      '#f06e27',
      '#f06418',
      '#d6530c',
      '#bf4906',
      '#a73c00'
    ]
  },
  white: '#fff',
  black: '#000',
  defaultRadius: 'md',
  fontFamily: 'Roboto, sans-serif',
  headings: {
    fontFamily: 'Greycliff CF, sans-serif'
  },

  fontSmoothing: true,
  cursorType: 'pointer',
  focusRing: 'never'
})
