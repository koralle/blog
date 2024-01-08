import { style } from '@vanilla-extract/css'

const rootStyle = style({
  display: 'block',
  boxSizing: 'border-box',
  minWidth: 'max-content',
  paddingTop: 12,
  paddingBottom: 12,
})

export { rootStyle }
