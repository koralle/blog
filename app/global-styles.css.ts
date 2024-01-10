import { globalStyle } from '@vanilla-extract/css'

globalStyle('html', {
  fontSize: '10px',
  fontStyle: 'normal',
  fontVariant: 'normal',
  height: '100%',
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
