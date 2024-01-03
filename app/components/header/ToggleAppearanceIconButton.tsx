import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'
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

  return (
    <IconButton radius="full" variant="soft" color="gray" onClick={onClick}>
      {useAppearance === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  )
}

export { ToggleAppearanceIconButton }
