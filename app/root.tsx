import type { LinkDescriptor, LinksFunction, MetaFunction } from '@remix-run/cloudflare'
import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import 'the-new-css-reset/css/reset.css'
import { Layout } from '~/components/layout'
import '~/global-styles.css'
import { SITE_DESCRIPTION, SITE_TITlE } from './consts'
import { appContainer } from './styles/theme.css'

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
  {
    rel: 'stylesheet',
    href: `https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap&text=${SITE_TITlE}`,
  },
]

export const links: LinksFunction = () => [...WebFontLinks, { rel: 'icon', href: '/favicon.ico' }]

export const meta: MetaFunction = () => {
  return [
    {
      title: SITE_TITlE,
    },
    {
      description: SITE_DESCRIPTION,
    },
  ]
}

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={appContainer}>
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />
      </body>
    </html>
  )
}
