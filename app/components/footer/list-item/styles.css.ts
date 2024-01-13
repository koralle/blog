import { style } from '@vanilla-extract/css'
import { sprinkles } from '~/styles/theme.css'

const rootStyle = style([
  sprinkles({
    pb: 'sm',
  }),
  {
    display: 'block',
    boxSizing: 'border-box',
    minWidth: 'max-content',
  },
])

export { rootStyle }
