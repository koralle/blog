import { globalStyle, style } from '@vanilla-extract/css'
import { spacing } from '~/styles/spacing.css'
import { globalThemeVars, sprinkles } from '~/styles/theme.css'

const footerRootStyles = style([
  sprinkles({
    pbs: 'xl',
  }),
  {
    color: globalThemeVars.color.header.fg,
    boxSizing: 'border-box',
  },
])

const siteTitleStyles = style([
  sprinkles({
    fontFamily: 'siteTitle',
    fontSize: 'lg',
  }),
  {
    display: 'inline-block',
    lineHeight: '1.5em',
  },
])

const siteDescriptionStyles = style([
  sprinkles({
    fontSize: 'sm',
  }),
  {
    display: 'inline-block',
  },
])

const topNavigationStyles = style([
  sprinkles({
    mbe: 'xl',
  }),
  {},
])

const otherNavigationStyles = style([
  sprinkles({
    fontSize: 'md',
  }),
  {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: globalThemeVars.spacing.lg,
  },
])

globalStyle(`:where(${otherNavigationStyles} > nav > div) span`, {
  display: 'inline-block',
  fontWeight: 'bold',
})

const copyRightStyles = style([
  sprinkles({
    fontSize: {
      mobile: 'sm',
      tablet: 'md',
    },
    mi: 'auto',
  }),
  {
    width: 'max-content',
    display: 'inline-block',
  },
])

globalStyle(`:where(div:has(> ${copyRightStyles}))`, {
  display: 'grid',
  placeContent: 'center',
  width: '100%',
  marginBlock: spacing.md,
  '@media': {
    '(min-width: 768px)': {
      marginBlock: spacing.xl,
    },
  },
})

const separatorStyles = style({
  backgroundColor: '#cecece',
  marginInline: spacing.md,
  marginBlock: spacing.lg,
  height: 1,
})

export {
  copyRightStyles,
  footerRootStyles,
  otherNavigationStyles,
  topNavigationStyles,
  siteTitleStyles,
  siteDescriptionStyles,
  separatorStyles,
}
