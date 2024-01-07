import { json, type MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { createClient } from '~/cms/client'
import { cmsBlogContentListSchema } from '~/cms/schema'

import type { EventContext } from '@cloudflare/workers-types'
import { ArticleCard } from '~/components/ArticleCard'
import { pageRootContainerStyles, pageRootStyles } from './page.css'
import { Container } from '~/components/container'

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

const Index = () => {
  const data = useLoaderData<typeof loader>()
  return (
    <article>
      <Container className={pageRootContainerStyles}>
        <div className={pageRootStyles}>
          {data.contents.map((content) => (
            <ArticleCard
              key={content.id}
              title={content.title}
              tagList={[]}
              eyecatch={content.eyecatch}
            />
          ))}
        </div>
      </Container>
    </article>
  )
}

export default Index
