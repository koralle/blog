import { style } from '@vanilla-extract/css'
import { containerName } from '../../styles.css'

const rootStyle = style({
  boxSizing: 'border-box',
  width: '100%',
  display: 'grid',
  gap: '1rem',
  '@container': {
    [`${containerName} (min-width: 768px)`]: {
      gridTemplateColumns: 'subgrid',
    },
  },
})

export { rootStyle }
