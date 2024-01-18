import { style } from '@vanilla-extract/css'
import { sprinkles } from '~/styles/theme.css'

const rootStyles = style([
  sprinkles({
    fontSize: 'md',
  }),
  {},
])

const articleTitleStyles = style([
  sprinkles({
    fontSize: {
      mobile: 'lg',
      desktop: 'xl',
    },
  }),
])

const h2Styles = style([
  sprinkles({
    fontSize: {
      mobile: 'md',
      tablet: 'lg',
    },
  }),
  {},
])

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
