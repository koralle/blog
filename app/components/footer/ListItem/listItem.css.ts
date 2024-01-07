import { style } from '@vanilla-extract/css'

const rootStyle = style({
  display: 'block',
  boxSizing: 'border-box',
  width: 'inherit',
  minWidth: 'max-content',
  height: 'min-content',
  paddingTop: 12,
  paddingBottom: 12,
})

export { rootStyle }
