import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '$background',
    color: '$text',
    fontFamily: '$body',
  },
  '@media (max-width: 1080px)': {
    html: {
      fontSize: '93.75%',
    },
  },
  '@media (max-width: 720px)': {
    html: {
      fontSize: '87.5%',
    },
  },
  'body, input, textarea, select': {
    fontFamily: '$body',
  },

  button: {
    cursor: 'pointer',
    color: '$text',
    border: 'none',
    boxShadow: 'none',
    fontFamily: '$heading',
    bg: '$blue500',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  'h1, h2, h3': {
    fontFamily: '$heading',
  },

  '&.custom-toast-container': {
    backgroundColor: '#2b2b2b',
    color: 'white',
  },

  '@font-face': {
    fontFamily: 'Colporteur',
    src: 'local("/fonts/Colporteur/regular/font.woff"), url("/fonts/Colporteur/regular/font.woff")',
  },
})
