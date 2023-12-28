import type { LinksFunction } from '@remix-run/cloudflare'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import resetCss from 'the-new-css-reset/css/reset.css'
import radixThemeCss from '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: resetCss },
  { rel: 'stylesheet', href: radixThemeCss },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Theme appearance="light">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Theme>
      </body>
    </html>
  )
}
