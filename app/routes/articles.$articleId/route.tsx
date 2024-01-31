import parse, { domToReact, Element, HTMLReactParserOptions } from 'html-react-parser'
import { createClient } from '~/cms/client'

import type { EventContext } from '@cloudflare/workers-types'
import { MetaFunction, json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { clsx } from 'clsx'
import hjis from 'highlight.js'
import 'highlight.js/styles/github.css'
import { cmsBlogContentSchema } from '~/cms/schema'
import { Container } from '~/components/container'
import {
  articleTitleStyles,
  codePreviewStyles,
  codeStyles,
  h2Styles,
  rootStyles,
} from './styles.css'

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

const options = {
  replace(domNode) {
    if (!(domNode instanceof Element) || domNode.type !== 'tag') {
      return
    }

    const { children } = domNode

    if (domNode.name === 'h2') {
      return <h2 className={h2Styles}>{domToReact(children, options)}</h2>
    }

    if (domNode.name === 'pre') {
      return <pre className={codePreviewStyles}>{domToReact(children, options)}</pre>
    }

    if (domNode.name === 'code') {
      const result = hjis.highlightAuto(domNode.children[0].data)
      return <code className={clsx('hjis', codeStyles)}>{parse(result.value)}</code>
    }
  },
} satisfies HTMLReactParserOptions

const Index = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <article>
      <Container className={rootStyles}>
        <header>
          <h1 className={articleTitleStyles}>
            <span>{data.title}</span>
          </h1>
        </header>
        <section>{data.content ? parse(data.content, options) : ''}</section>
      </Container>
    </article>
  )
}

export default Index
