import { globalStyle } from '@vanilla-extract/css'
import { appId, globalTheme } from './styles/theme.css'

globalStyle('html', {
  height: '100%',
  fontSize: '62.5%',
})

globalStyle('body', {
  height: '100%',
})

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
  verticalAlign: 'middle',
  fontStyle: 'italic',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  shapeMargin: '0.75rem',
})

globalStyle(`#${appId}`, {
  fontFamily: globalTheme.font.fontFamily.base,
  backgroundColor: globalTheme.color.base,
})
