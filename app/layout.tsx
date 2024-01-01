import { Box, Grid, Theme } from '@radix-ui/themes'
import { Outlet } from '@remix-run/react'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
  <Theme asChild appearance="light">
    <Grid flow="column" height="100%" rows="min-content 1fr min-content">
      <Box asChild>
        <header>Hello, world!</header>
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

export { Layout }
