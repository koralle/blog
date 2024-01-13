import { createSprinkles } from '@vanilla-extract/sprinkles'
import { fontFamilyProperties, fontSizeProperties, fontSize } from './font.css'
import { spacingProperties, spacing } from './spacing.css'
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'
import { color } from './color.css'

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

export const appContainer = sprinkles({
  fontFamily: 'base',
})
