import { createGlobalTheme } from '@vanilla-extract/css'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

export const appId = 'app' as const

export type ColorScheme = 'dark' | 'light'

export const globalTheme = createGlobalTheme(`#${appId}`, {
  color: {
    brand: '#ec93a1',
    base: '#f8f8f8',
    footer: 'e7bfcb',
  },
  font: {
    fontFamily: {
      base: "'Noto Sans JP', sans-serif",
      blogTitle: "'Cherry Bomb One', sans-serif",
    },
    fontSize: {
      sm: 'clamp(1.1rem, calc(0.9rem + 0.625vw), 1.6rem)',
      md: 'clamp(1.2rem, calc(1rem + 0.625vw), 1.7rem)',
      lg: 'clamp(2.4rem, calc(2.2rem + 0.625vw), 2.9rem)',
      xl: 'clamp(3.2rem, calc(3.5rem + 0.625vw), 4.0rem)',
    },
  },
  spacing: {
    xxs: '0.4rem',
    xs: '0.8rem',
    sm: '1.2rem',
    md: '1.6rem',
    xl: '2.4rem',
  },
})

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    paddingTop: globalTheme.spacing,
    paddingLeft: globalTheme.spacing,
    paddingRight: globalTheme.spacing,
    paddingBottom: globalTheme.spacing,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
  },
})

export const sprinkles = createSprinkles(responsiveProperties)
