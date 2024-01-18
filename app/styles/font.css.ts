import { defineProperties } from '@vanilla-extract/sprinkles'
import { appContainerName } from './container.css'

const fontFamily = {
  base: "'Noto Sans JP', 'Helvetica Neue', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif",
  siteTitle:
    "'Cherry Bomb One', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif",
} as const

const fontSize = {
  sm: 'clamp(1.1rem, calc(0.9rem + 0.625vw), 1.6rem)',
  md: 'clamp(1.2rem, calc(1.4rem + 0.625vw), 1.9rem)',
  lg: 'clamp(2.4rem, calc(2.2rem + 0.625vw), 2.9rem)',
  xl: 'clamp(3.2rem, calc(3rem + 0.625vw), 3.7rem)',
} as const

export const fontSizeProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@container': `${appContainerName} (min-width: 768px)` },
    desktop: { '@container': `${appContainerName} (min-width: 1024px)` },
  },
  defaultCondition: 'mobile',
  properties: {
    fontSize,
  },
})

const fontFamilyProperties = defineProperties({
  properties: {
    fontFamily,
  },
})

export { fontFamilyProperties, fontSize, fontFamily }
