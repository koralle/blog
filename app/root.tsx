import type { LinkDescriptor, LinksFunction } from '@remix-run/cloudflare'
import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react'
import resetCss from 'the-new-css-reset/css/reset.css'
import { cssBundleHref } from '@remix-run/css-bundle'
import { Layout } from '~/components/layout'
import '~/global-styles.css'

const WebFontLinks: LinkDescriptor[] = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap',
  },
]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: resetCss },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  ...WebFontLinks,
]

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}
