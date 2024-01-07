import { Theme } from '@radix-ui/themes'
import { Outlet } from '@remix-run/react'
import { ReactNode, useContext } from 'react'
import { Header } from '~/components/header'
import { AppearanceContext } from '~/contexts/AppearanceContext'
import { Footer } from '~/components/footer'
import { Container } from '~/components/container'
import {
  contentStyles,
  layoutFooterStyles,
  layoutHeaderStyles,
  layoutRootStyles,
} from './layout.css'

const Layout = ({ children }: { children?: ReactNode }) => {
  const appearance = useContext(AppearanceContext)

  return (
    <Theme asChild appearance={appearance}>
      <div className={layoutRootStyles}>
        <header className={layoutHeaderStyles}>
          <Header />
        </header>
        <div className={contentStyles}>
          <Outlet />
        </div>
        <footer className={layoutFooterStyles}>
          <Footer />
        </footer>
      </div>
    </Theme>
  )
}

export { Layout }
