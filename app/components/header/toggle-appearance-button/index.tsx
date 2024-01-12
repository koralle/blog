import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useCallback, useContext } from 'react'
import { AppearanceContext, SetAppearanceContext } from '~/contexts/AppearanceContext'

const ToggleAppearanceIconButton = () => {
  const useAppearance = useContext(AppearanceContext)
  const useSetAppearance = useContext(SetAppearanceContext)

  const onClick = useCallback(() => {
    switch (useAppearance) {
      case 'light':
        useSetAppearance('dark')
        return
      case 'dark':
        useSetAppearance('light')
        return
    }
  }, [useAppearance, useSetAppearance])

  return <button onClick={onClick}>{useAppearance === 'light' ? <MoonIcon /> : <SunIcon />}</button>
}

export { ToggleAppearanceIconButton }
