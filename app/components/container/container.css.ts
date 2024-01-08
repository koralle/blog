import { style } from '@vanilla-extract/css'

const contanerRootStyles = style({
  width: '100%',
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  flexShrink: 1,
})

const containerInnerStyles = style({
  selectors: {
    [`:where(${contanerRootStyles}) &`]: {
      width: '100%',
      height: '100%',
      maxWidth: 1136,
    },
  },
})

export { containerInnerStyles, contanerRootStyles }
