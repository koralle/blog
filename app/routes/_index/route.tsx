import { Container } from '~/components/container'
import { pageRootContainerStyles, pageRootStyles } from './styles.css'

const Index = () => {
  return (
    <article>
      <Container className={pageRootContainerStyles}>
        <div className={pageRootStyles}>
          <h1>Blog</h1>
        </div>
      </Container>
    </article>
  )
}

export default Index
