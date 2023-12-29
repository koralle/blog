import type { LinksFunction } from '@remix-run/cloudflare'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import resetCss from 'the-new-css-reset/css/reset.css'
import radixThemeCss from '@radix-ui/themes/styles.css'
import { cssBundleHref } from '@remix-run/css-bundle'
import { bodyRootStyles, gridRootStyles, htmlRootStyles, themeRootStyles } from '~/global.css'
import { Box, Container, Grid, Theme } from '@radix-ui/themes'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: resetCss },
  { rel: 'stylesheet', href: radixThemeCss },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang="en" className={htmlRootStyles}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={bodyRootStyles}>
        <Theme appearance="dark" className={themeRootStyles}>
          <Grid
            flow="column"
            rows={`
              [main-start header-start] min-content
              [header-end content-start] 1fr
              [content-end footer-start] min-content
              [footer-end main-end]
              `}
            columns="1"
            display="grid"
            height="100%"
            className={gridRootStyles}
          >
            <header>
              <Header />
            </header>
            <Container py="4" style={{ backgroundColor: '#333333' }}>
              <Outlet />
            </Container>
            <footer>
              <Footer />
            </footer>
          </Grid>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Theme>
      </body>
    </html>
  )
}
