import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body': {
        background:
          props.colorMode === 'light'
            ? 'secondary.background'
            : 'primary.title',
        color: 'secondary.text',
      },
    }),
  },

  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  colors: {
    primary: {
      red: '#e52e4d',
      green: '#33cc95',
      purple: '#5429cc',
      lightPurple: '#6933ff',
    },
    secondary: {
      text: '#969cb3',
      title: '#363f5f',
      background: '#f0f2f5',
      shape: '#ffffff',
    },
  },

  fonts: {
    body: 'Poppins, sans-serif',
  },

  sizes: {
    desktop: '980px',
  },

  components: {
    Button: {
      baseStyle: {
        transition: 'filter .1s ease-out',
      },
      sizes: {
        md: {
          px: 6,
        },
      },
      variants: {
        primary: {
          color: 'whiteAlpha.900',
          _hover: {
            filter: 'brightness(.9)',
          },
        },
      },
    },
    Table: {
      variants: {
        transactions: ({ colorMode }) => ({
          table: {
            borderCollapse: 'separate',
            borderSpacing: '0 .5rem',
            thead: {
              th: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'sm',
                fontWeight: 400,
                textTransform: 'inherit',
              },
            },
            tbody: {
              td: {
                background:
                  colorMode === 'light' ? 'secondary.shape' : 'gray.700',
                ':first-of-type': {
                  roundedLeft: 'md',
                  color: colorMode === 'light' ? 'secondary.title' : 'gray.200',
                },
                ':last-of-type': {
                  roundedRight: 'md',
                },
              },
            },
          },
        }),
      },
    },
  },
})

export default theme
