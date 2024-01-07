import { style } from '@vanilla-extract/css'

const innerStyles = style({
  maxWidth: 1136,
})

const rootStyles = style({
  padding: 16,
  width: '100%',
  height: 'min-content',
})

const gridStyles = style({
  boxSizing: 'border-box',
  display: 'grid',
  width: '100%',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'max-content repeat(1, minmax(0, 1fr))',
  height: '100%',
})

const rightComponentsContainerStyles = style({
  containerType: 'inline-size',
  containerName: 'header-right-components-container',
  width: '100%',
  height: 'min-content',
})

const rightComponentsStyles = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  gap: 16,
  '@container': {
    '(width < 360px)': {
      display: 'none',
    },
  },
  selectors: {
    [`:where(${rightComponentsContainerStyles}) > &`]: {
      width: 'max-content',
      height: 'min-content',
    },
  },
})

export {
  gridStyles,
  innerStyles,
  rightComponentsContainerStyles,
  rightComponentsStyles,
  rootStyles,
}
