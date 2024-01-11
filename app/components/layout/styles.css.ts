import { style } from '@vanilla-extract/css'

const layoutBaseStyles = style({
  width: '100%',
})

const layoutRootStyles = style([
  layoutBaseStyles,
  {
    display: 'flex',
    width: '100%',
    minHeight: '100dvh',
    flexDirection: 'column',
    alignItems: 'center',
  },
])

const contentStyles = style([
  layoutBaseStyles,
  {
    paddingTop: 16,
    paddingBottom: 32,
  },
])

const layoutHeaderStyles = style([
  layoutBaseStyles,
  {
    display: 'block',
    // position: 'sticky',
    // top: 0,
    zIndex: '100',
  },
])

const layoutFooterStyles = style([
  layoutBaseStyles,
  {
    display: 'block',
  },
])

export { contentStyles, layoutFooterStyles, layoutHeaderStyles, layoutRootStyles }
