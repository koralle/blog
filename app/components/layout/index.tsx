import { Outlet } from '@remix-run/react'
import { ReactNode } from 'react'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import {
  contentStyles,
  layoutFooterStyles,
  layoutHeaderStyles,
  layoutRootStyles,
} from './styles.css'
import { clsx } from 'clsx'

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
