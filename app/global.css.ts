import { style } from '@vanilla-extract/css'

export const htmlRoot = style({
  height: '100%',
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: '10px',
  fontStyle: 'normal',
  fontVariant: 'normal',
})

export const bodyRoot = style({
  height: '100%',
  font: 'inherit',
})
