import { logDevReady } from '@remix-run/cloudflare'
import { Hono } from 'hono'
import * as build from '@remix-run/dev/server-build'
import { handle } from 'hono/cloudflare-pages'
import { remix } from 'app/utils/adapters.server'

if (process.env.NODE_ENV === 'development') {
  logDevReady(build)
}

/* type your Cloudflare bindings here */
type Bindings = Record<string | number | symbol, never>

/* type your Hono variables (used with ctx.get/ctx.set) here */
type Variables = Record<string | number | symbol, never>

type ContextEnv = { Bindings: Bindings; Variables: Variables }

const server = new Hono<ContextEnv>()

// Add the Remix middleware to your Hono server
server.use(
  '*',
  remix({
    build,
    mode: process.env.NODE_ENV as 'development' | 'production',
    // getLoadContext is optional, the default function is the same as here
    getLoadContext(ctx) {
      return ctx.env
    },
  }),
)

// Create a Cloudflare Pages request handler for your Hono server
export const onRequest = handle(server)
