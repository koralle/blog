import { ReactNode, useState } from 'react'
import {
  AppearanceContext,
  AppearanceType,
  SetAppearanceContext,
} from '~/contexts/AppearanceContext'

const AppearanceProvider = ({ children }: { children?: ReactNode }) => {
  const [appearance, setAppearance] = useState<AppearanceType>('light')

  return (
    <AppearanceContext.Provider value={appearance}>
      <SetAppearanceContext.Provider value={setAppearance}>
        {children}
      </SetAppearanceContext.Provider>
    </AppearanceContext.Provider>
  )
}

export { AppearanceProvider }
