import { style } from '@vanilla-extract/css'

const containerRootStyles = style({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  margin: 0,
})

const containerInnerStyles = style({
  selectors: {
    [`:where(${containerRootStyles}) &`]: {
      width: '100%',
      marginInline: 'auto',
      // default (Mobile Phone View)
      paddingInline: 14,
      '@media': {
        // Tablet View (Portrait)
        'screen and (min-width: 768px)': {
          paddingInline: 25,
        },
        // Tablet View (LandScape), PC View
        'screen and (min-width: 1024px)': {
          paddingInline: 40,
        },
        // PC View
        'screen and (min-width: 1280px)': {
          maxWidth: 1200,
        },
      },
    },
  },
})

export { containerInnerStyles, containerRootStyles }
