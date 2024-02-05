import { logDevReady } from '@remix-run/cloudflare'
import * as build from '@remix-run/dev/server-build'
import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'
import { remix } from 'remix-hono/handler'

if (process.env.NODE_ENV === 'development') {
  logDevReady(build)
}

type Bindings = Record<string, never>

type Varialbes = Record<string, never>

type ContextEnv = {
  Bindings: Bindings
  Variables: Varialbes
}

const server = new Hono<ContextEnv>({})

server.use(
  '*',
  remix({
    build,
    mode: process.env.NODE_ENV as 'production' | 'development',
    getLoadContext(c) {
      return c.env
    },
  }),
)

export const onRequest = handle(server)
