import { json, type MetaFunction } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import { createClient } from '~/cms/client'
import parse from 'html-react-parser'
import { cmsBlogContentListSchema } from '~/cms/schema'

import type { EventContext } from '@cloudflare/workers-types'
import { Box } from '@radix-ui/themes'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix!',
    },
  ]
}

export const loader = async ({ context }: { context: EventContext<Env, string, unknown> }) => {
  // FIXME: いい感じにContextに含めるようにしたい
  const apiKey = context.env.MICROCMS_API_KEY
  const apiVersion = context.env.MICROCMS_API_VERSION
  const serviceName = context.env.MICROCMS_SERVICE_NAME
  const createClientResult = createClient({ apiKey, apiVersion, serviceName })

  if (createClientResult.status === 'err') {
    throw new Error(createClientResult.error.message)
  }

  const client = createClientResult.value

  const fetchResult = await client.getList(cmsBlogContentListSchema)
  if (fetchResult.status === 'err') {
    throw new Error(fetchResult.error.message)
  }

  return json(fetchResult.value)
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <Box px="4">
      {data.contents.map((content) => (
        <div>
          <h1>
            <Link to={`/articles/${content.id}`}>{parse(content.title)}</Link>
          </h1>
        </div>
      ))}
    </Box>
  )
}
