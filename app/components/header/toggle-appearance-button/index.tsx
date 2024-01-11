import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'
import { useCallback, useContext } from 'react'
import { ColorSchemeContext, SetColorSchemeContext } from '~/contexts/colorSchemeContext'

const ToggleColorSchemeIconButton = () => {
  const useColorScheme = useContext(ColorSchemeContext)
  const useSetColorScheme = useContext(SetColorSchemeContext)

  const onClick = useCallback(() => {
    switch (useColorScheme) {
      case 'light':
        useSetColorScheme('dark')
        return
      case 'dark':
        useSetColorScheme('light')
        return
    }
  }, [useColorScheme, useSetColorScheme])

  return (
    <IconButton radius="full" variant="soft" color="gray" onClick={onClick}>
      {useColorScheme === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  )
}

export { ToggleColorSchemeIconButton }
