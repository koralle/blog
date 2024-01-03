import { Box, Grid, Theme } from '@radix-ui/themes'
import { Outlet } from '@remix-run/react'
import { ReactNode, useContext } from 'react'
import { Header } from '~/components/header'
import { AppearanceContext } from '~/contexts/AppearanceContext'

const Layout = ({ children }: { children?: ReactNode }) => {
  const appearance = useContext(AppearanceContext)

  return (
    <Theme asChild appearance={appearance}>
      <Grid flow="column" height="100%" rows="min-content 1fr min-content">
        <Box asChild>
          <header>
            <Header />
          </header>
        </Box>
        <Box asChild>
          <main>
            <Outlet />
          </main>
        </Box>
        <Box asChild>
          <footer>This is a footer.</footer>
        </Box>
      </Grid>
    </Theme>
  )
}

export { Layout }
