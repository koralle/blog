import { Container } from '~/components/container'
import { pageRootContainerStyles, pageRootStyles } from './styles.css'

const Index = () => {
  return (
    <article>
      <Container className={pageRootContainerStyles}>
        <div className={pageRootStyles}></div>
      </Container>
    </article>
  )
}

export default Index
