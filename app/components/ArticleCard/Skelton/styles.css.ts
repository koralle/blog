import { style } from '@vanilla-extract/css'

const rootStyles = style({
  display: 'grid',
  placeContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'gray',
  ':hover': {
    filter: 'brightness(0.85)',
  },
})

const iconStyles = style({})

export { iconStyles, rootStyles }
