import { cloudflareDevProxyVitePlugin, vitePlugin as remix } from '@remix-run/dev'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [vanillaExtractPlugin(), cloudflareDevProxyVitePlugin(), tsconfigPaths(), remix({})],
})
