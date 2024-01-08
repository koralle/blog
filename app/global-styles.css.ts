import { style } from '@vanilla-extract/css'
import { siteThemeVars } from '~/styles/theme.css'

export const htmlRoot = style({
  color: siteThemeVars.color.base,
  fontSize: '10px',
  fontStyle: 'normal',
  fontVariant: 'normal',
  height: '100%',
})

export const bodyRoot = style({
  color: siteThemeVars.color.base,
  height: '100%',
})
