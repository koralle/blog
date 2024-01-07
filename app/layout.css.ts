import { style } from '@vanilla-extract/css'

const layoutBaseStyles = style({
  width: '100%',
})

const layoutRootStyles = style([
  layoutBaseStyles,
  {
    display: 'flex',
    height: 'max-content',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
  },
])

const contentStyles = style([
  layoutBaseStyles,
  {
    selectors: {
      [`:where(${layoutRootStyles}) > &`]: {
        paddingTop: 16,
        paddingBottom: 32,
        height: '100%',
      },
    },
  },
])

const layoutHeaderStyles = style([
  layoutBaseStyles,
  {
    selectors: {
      [`:where(${layoutRootStyles}) > &`]: {
        display: 'block',
        position: 'sticky',
        top: 0,
        zIndex: '100',
        height: 'min-content',
      },
    },
  },
])

const layoutFooterStyles = style([
  layoutBaseStyles,
  {
    selectors: {
      [`:where(${layoutRootStyles}) > &`]: {
        display: 'block',
        height: 'min-content',
      },
    },
  },
])

export { contentStyles, layoutFooterStyles, layoutHeaderStyles, layoutRootStyles }
