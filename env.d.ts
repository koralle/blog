/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare type Env = {
  MICROCMS_API_KEY: string
  MICROCMS_SERVICE_NAME: string
  MICROCMS_API_VERSION: string
}
