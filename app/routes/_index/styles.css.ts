import { createContainer, globalStyle, style } from '@vanilla-extract/css'
import { globalThemeVars } from '~/styles/theme.css'
import { sprinkles } from '~/styles/theme.css'

const containerName = createContainer()

const pageRootContainerStyles = style({
  containerType: 'inline-size',
  containerName,
})

const pageRootStyles = style([
  sprinkles({}),
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
    gap: globalThemeVars.spacing.lg,
    '@container': {
      [`${containerName} (min-width: 768px)`]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        justifyContent: 'stretch',
        alignItems: 'start',
        gap: globalThemeVars.spacing.xl,
      },
    },
  },
])

globalStyle(`:where(${pageRootStyles}) :not(:has(img)) a`, {
  fontSize: globalThemeVars.fontSize.md,
})

export { pageRootContainerStyles, pageRootStyles, containerName }
