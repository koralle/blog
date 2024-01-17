import { createSprinkles } from '@vanilla-extract/sprinkles'
import { fontFamilyProperties, fontSize, fontSizeProperties } from './font.css'
import { spacing, spacingProperties } from './spacing.css'
import { createGlobalTheme, createThemeContract, style } from '@vanilla-extract/css'
import { color } from './color.css'
import { appContainerName } from './container.css'

export const globalThemeVars = createThemeContract({
  fontSize: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  spacing: {
    0: null,
    auto: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2lg': null,
    '2xl': null,
    '4lg': null,
  },
  color: {
    global: {
      bg: null,
    },
    header: {
      fg: null,
      bg: null,
    },
    content: {
      fg: null,
    },
    footer: {
      fg: null,
      bg: null,
      separator: {
        bg: null,
      },
    },
  },
})

createGlobalTheme(':root', globalThemeVars, {
  fontSize,
  spacing,
  color,
})

export const sprinkles = createSprinkles(
  fontSizeProperties,
  fontFamilyProperties,
  spacingProperties,
)

export const appContainer = style([
  sprinkles({
    fontFamily: 'base',
  }),
  {
    containerName: appContainerName,
    containerType: 'inline-size',
  },
])
