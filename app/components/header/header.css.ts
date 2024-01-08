import { style } from '@vanilla-extract/css'

const rootStyles = style({
  padding: 16,
  minHeight: 'max-content',
})

const gridStyles = style({
  boxSizing: 'border-box',
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'max-content repeat(1, minmax(0, 1fr))',
})

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

export { gridStyles, rightComponentsStyles, rootStyles }
