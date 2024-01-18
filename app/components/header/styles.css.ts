import { globalStyle, style } from '@vanilla-extract/css'
import { appContainerName } from '~/styles/container.css'
import { globalThemeVars, sprinkles } from '~/styles/theme.css'

const iconSize = 24
const buttonSize = 44

const rootStyles = style([
  sprinkles({}),
  {
    color: globalThemeVars.color.header.fg,
    boxSizing: 'border-box',
    backgroundColor: globalThemeVars.color.header.bg,
  },
])

globalStyle(`:where(${rootStyles}) a`, {
  display: 'inline-block',
  minWidth: 'max-content',
  minHeight: 'max-content',
})

const siteTitleStyles = style([
  sprinkles({
    fontFamily: 'siteTitle',
    fontSize: 'lg',
  }),
  style({
    display: 'inline-block',
    lineHeight: '2.0em',
  }),
])

const gridStyles = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'max-content repeat(1, minmax(0, 1fr))',
})

const rightComponentsStyles = style([
  sprinkles({
    mis: 'auto',
    fontSize: 'md',
  }),
  {
    display: 'none',
    fontWeight: 'bold',
    width: 'max-content',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: globalThemeVars.spacing.lg,
    '@container': {
      [`${appContainerName} (min-width: 768px)`]: {
        display: 'flex',
      },
    },
  },
])

globalStyle(`${rightComponentsStyles} div:first-of-type`, {
  display: 'flex',
  flexDirection: 'row',
  gap: `calc((${buttonSize}px - ${iconSize}px) / 2 + ${globalThemeVars.spacing.lg})`,
})

const navigationTitleStyles = style([
  sprinkles({
    fontSize: {
      mobile: 'md',
      tablet: 'md',
    },
  }),
  {
    fontWeight: 'bold',
  },
])

const githubButtonStyles = style({
  display: 'grid',
  placeContent: 'center',
  width: buttonSize,
  height: buttonSize,
  selectors: {
    '&:hover': {
      // TODO: ホバーした時のスタイルを変更
    },
  },
})

globalStyle(`${githubButtonStyles} a`, {
  display: 'grid',
  placeContent: 'center',
})

globalStyle(`${githubButtonStyles} svg`, {
  width: iconSize,
  height: iconSize,
})

export {
  gridStyles,
  navigationTitleStyles,
  rightComponentsStyles,
  rootStyles,
  siteTitleStyles,
  githubButtonStyles,
}
