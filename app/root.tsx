import type { LinksFunction } from '@remix-run/cloudflare'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import resetCss from 'the-new-css-reset/css/reset.css'
import radixThemeCss from '@radix-ui/themes/styles.css'
import { cssBundleHref } from '@remix-run/css-bundle'
import { bodyRoot, htmlRoot } from '~/global.css'
import { Box, Container, Grid, Theme } from '@radix-ui/themes'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: resetCss },
  { rel: 'stylesheet', href: radixThemeCss },
]

export default function App() {
  return (
    <html lang="en" className={htmlRoot}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={bodyRoot}>
        <Theme appearance="dark" style={{ height: '100%' }}>
          <Grid
            rows="3"
            columns="1"
            display="grid"
            style={{ height: '100%', gridTemplateRows: 'auto 1fr auto' }}
          >
            <header>
              <Header />
            </header>
            <Container>
              <Outlet />
            </Container>
            <Footer />
          </Grid>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Theme>
      </body>
    </html>
  )
}
