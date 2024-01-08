import { style } from '@vanilla-extract/css'

export const htmlRoot = style({
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: '10px',
  fontStyle: 'normal',
  fontVariant: 'normal',
  height: '100%',
})

export const bodyRoot = style({
  font: 'inherit',
  height: '100%',
})
