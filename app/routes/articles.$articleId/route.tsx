import { type MetaFunction } from '@remix-run/cloudflare'
import 'highlight.js/styles/github.css'
import { Container } from '~/components/container'
import { rootStyles } from './styles.css'

export const meta: MetaFunction = () => {
  return []
}

const Index = () => {
  return (
    <article>
      <Container className={rootStyles}></Container>
    </article>
  )
}

export default Index
