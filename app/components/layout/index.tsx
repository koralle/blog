import { Outlet } from '@remix-run/react'
import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import {
  contentStyles,
  layoutFooterStyles,
  layoutHeaderStyles,
  layoutRootStyles,
} from './styles.css'

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={clsx(layoutRootStyles)}>
      <header className={layoutHeaderStyles}>
        <Header />
      </header>
      <main id="main" className={contentStyles}>
        <Outlet />
      </main>
      <footer className={layoutFooterStyles}>
        <Footer />
      </footer>
    </div>
  )
}

export { Layout }
