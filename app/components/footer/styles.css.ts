import { style } from '@vanilla-extract/css'

const footerRootStyles = style({
  padding: 0,
  paddingTop: 16,
  paddingLeft: 16,
  paddingRight: 16,
})

const topNavigationStyles = style({
  marginBottom: 32,
})

const otherNavigationStyles = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
})

const copyRightStyles = style({
  padding: 16,
})

export { copyRightStyles, footerRootStyles, otherNavigationStyles, topNavigationStyles }
