import { style } from '@vanilla-extract/css'
import { globalThemeVars, sprinkles } from '~/styles/theme.css'

const layoutBaseStyles = style({
  width: '100%',
})

const layoutRootStyles = style([
  sprinkles({}),
  layoutBaseStyles,
  {
    display: 'flex',
    width: '100%',
    minHeight: '100dvh',
    flexDirection: 'column',
    alignItems: 'center',
  },
])

const contentStyles = style([
  layoutBaseStyles,
  sprinkles({
    pbs: '2xl',
    pbe: '4lg',
  }),
  {},
])

const layoutHeaderStyles = style([
  layoutBaseStyles,
  {
    display: 'block',
    boxSizing: 'border-box',
    backgroundColor: globalThemeVars.color.header.bg,
    position: 'sticky',
    top: 0,
    zIndex: '100',
  },
])

const layoutFooterStyles = style([
  layoutBaseStyles,
  {
    display: 'block',
    boxSizing: 'border-box',
    backgroundColor: globalThemeVars.color.footer.bg,
  },
])

export { contentStyles, layoutFooterStyles, layoutHeaderStyles, layoutRootStyles }
