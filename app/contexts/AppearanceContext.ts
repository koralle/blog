import type { ThemeOptions } from '@radix-ui/themes'
import { createContext, Dispatch, SetStateAction } from 'react'

type AppearanceType = Exclude<ThemeOptions['appearance'], 'inherit'>

const AppearanceContext = createContext<AppearanceType>('light')
const SetAppearanceContext = createContext<Dispatch<SetStateAction<AppearanceType>>>(
  () => undefined,
)

export { AppearanceContext, SetAppearanceContext }
export type { AppearanceType }
