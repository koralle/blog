import { style } from '@vanilla-extract/css'

const rootStyles = style({
  padding: '0 16px',
})

const articleTitleStyles = style({
  fontSize: '3rem',
  '@media': {
    '(width < 640px)': {
      fontSize: '2.0rem',
    },
  },
})

const h2Styles = style({
  fontSize: '2rem',
  '@media': {
    '(width < 640px)': {
      fontSize: '1.5rem',
    },
  },
})

const codePreviewStyles = style({
  backgroundColor: '#f0f0f0',
  padding: 16,
  overflow: 'auto',
})

const codeStyles = style({
  backgroundColor: '#f0f0f0',
  padding: '0 .1rem',
  // overflow: 'auto',
})

export { articleTitleStyles, codePreviewStyles, codeStyles, h2Styles, rootStyles }
