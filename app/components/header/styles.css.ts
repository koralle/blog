import { style } from '@vanilla-extract/css'
import { globalTheme, sprinkles } from '~/styles/theme.css'

const rootStyles = style([
  sprinkles({
    py: 'md',
    px: 'md',
  }),
  {
    minHeight: 'max-content',
    fontSize: globalTheme.font.fontSize.md,
    backgroundColor: '#f6d6dd',
  },
])

const gridStyles = style({
  boxSizing: 'border-box',
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'max-content repeat(1, minmax(0, 1fr))',
})

const siteTitleStyles = style([
  {
    color: '#6d6d6d',
    fontSize: globalTheme.font.fontSize.lg,
    fontWeight: 'normal',
    fontFamily: globalTheme.font.fontFamily.blogTitle,
  },
])

const rightComponentsStyles = style({
  display: 'flex',
  width: 'max-content',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  gap: 16,
  '@media': {
    '(width < 640px)': {
      display: 'none',
    },
  },
})

export { gridStyles, rightComponentsStyles, rootStyles, siteTitleStyles }
