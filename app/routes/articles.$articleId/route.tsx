import { createClient } from '~/cms/client'
import parse from 'html-react-parser'

import type { EventContext } from '@cloudflare/workers-types'
import { json, MetaFunction } from '@remix-run/cloudflare'
import { cmsBlogContentSchema } from '~/cms/schema'
import { useLoaderData } from '@remix-run/react'
import { Container } from '~/components/container'

export const meta: MetaFunction = () => {
  return []
}

export const loader = async ({
  params,
  context,
}: {
  params: { articleId: string }
  context: EventContext<Env, string, unknown>
}) => {
  const apiKey = context.env.MICROCMS_API_KEY
  const apiVersion = context.env.MICROCMS_API_VERSION
  const serviceName = context.env.MICROCMS_SERVICE_NAME
  const createClientResult = createClient({ apiKey, apiVersion, serviceName })

  if (createClientResult.status === 'err') {
    throw new Error(createClientResult.error.message)
  }

  const client = createClientResult.value

  const fetchResult = await client.get(params.articleId, cmsBlogContentSchema)
  if (fetchResult.status === 'err') {
    throw new Error(fetchResult.error.message)
  }

  return json(fetchResult.value)
}

const Index = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <Container>
      <h1>
        <span>{data.title}</span>
      </h1>
      <div>{data.content ? parse(data.content) : ''}</div>
    </Container>
  )
}

export default Index
