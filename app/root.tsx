import type { LinkDescriptor, LinksFunction } from '@remix-run/cloudflare'
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
} from '@remix-run/react'
import resetCss from 'the-new-css-reset/css/reset.css'
import radixThemeCss from '@radix-ui/themes/styles.css'
import { cssBundleHref } from '@remix-run/css-bundle'
import { bodyRoot, htmlRoot } from '~/global.css'
import { Layout } from '~/layout'
import { AppearanceProvider } from '~/contexts/AppearanceProvider'

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
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: resetCss },
  { rel: 'stylesheet', href: radixThemeCss },
  ...WebFontLinks,
]

export default function App() {
  const error = useRouteError()

  return (
    <html lang="en" className={htmlRoot}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={bodyRoot}>
        <AppearanceProvider>
          <Layout>
            {error ? (
              isRouteErrorResponse(error) ? (
                <div>
                  <h1>
                    {error.status} {error.statusText}
                  </h1>
                  <p>{error.data}</p>
                </div>
              ) : error instanceof Error ? (
                <div>
                  <h1>
                    {error.name} {error.message}
                  </h1>
                  <pre>{error.stack}</pre>
                </div>
              ) : (
                <h1>Unknown Error</h1>
              )
            ) : (
              <Outlet />
            )}
          </Layout>
        </AppearanceProvider>
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}
