import { style } from '@vanilla-extract/css'

const rootStyle = style({
  width: '100%',
  minHeight: 'max-content',
  height: 'min-content',
  ':hover': {
    cursor: 'pointer',
  },
})

export { rootStyle }
