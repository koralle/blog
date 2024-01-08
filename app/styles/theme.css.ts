import { createTheme } from '@vanilla-extract/css'

// TODO: ダークモード用のThemeも作成する
export const [siteThemeClass, siteThemeVars] = createTheme({
  color: {
    base: '#3d3d3d',
  },
  fontFamily: {
    base: "'Noto Sans JP', sans-serif",
  },
})
