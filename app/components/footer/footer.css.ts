import { style } from '@vanilla-extract/css'

const footerRootStyles = style({
  containerType: 'inline-size',
  containerName: 'site-footer-right',
  selectors: {
    [`&:where(*)`]: {
      width: '100%',
      height: 'min-content',
      padding: 0,
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
})

const topNavigationStyles = style({
  marginBottom: 32,
  minWidth: 'max-content',
})

const footerNavigationContainerStyles = style({
  width: '100%',
  height: 'inherit',
  containerType: 'inline-size',
  containerName: 'footer-navigation-container',
})

const footerNavigationStyles = style({
  width: 'inherit',
  minWidth: 'max-content',
  height: 'inherit',
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
})

const aboutNavigationStyles = style({
  width: 'inherit',
  height: 'inherit',
  marginBottom: 16,
})

const linksNavigationStyles = style({
  width: 'inherit',
  height: 'inherit',
  marginBottom: 16,
})

const copyRightStyles = style({
  width: '100%',
  height: 'min-content',
  padding: 16,
  '@container': {
    'site-footer-right (width < 640px)': {
      paddingBottom: 4,
      paddingTop: 4,
    },
  },
})

export {
  aboutNavigationStyles,
  copyRightStyles,
  footerNavigationContainerStyles,
  footerNavigationStyles,
  footerRootStyles,
  linksNavigationStyles,
  topNavigationStyles,
}
