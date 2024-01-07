import { style } from '@vanilla-extract/css'

const containerName = 'page-root-container'

const pageRootContainerStyles = style({
  width: '100%',
  height: 'inherit',
  padding: 0,
  paddingLeft: 16,
  paddingRight: 16,
  containerType: 'inline-size',
  containerName: containerName,
})

const pageRootStyles = style({
  width: 'inherit',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  justifyContent: 'stretch',
  gap: 32,
  '@container': {
    [`${containerName} (width < 640px)`]: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      flexShrink: 1,
      alignItems: 'center',
      gap: 16,
    },
  },
})

export { pageRootContainerStyles, pageRootStyles }
