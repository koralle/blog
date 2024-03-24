import { Outlet } from '@remix-run/react'
import { Container } from '~/components/container'

const Route = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default Route
