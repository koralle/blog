import { globalStyle } from '@vanilla-extract/css'
import { globalThemeVars } from '~/styles/theme.css'

globalStyle('html', {
  height: 'max-content',
  fontSize: '62.5%',
  backgroundColor: globalThemeVars.color.global.bg,
})

globalStyle('body', {
  height: 'max-content',
})

globalStyle(':where(img)', {
  maxWidth: '100%',
  height: 'auto',
  verticalAlign: 'middle',
  fontStyle: 'italic',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  shapeMargin: '0.75rem',
})
