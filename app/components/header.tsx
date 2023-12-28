import { Box, Container, Flex, Heading, IconButton, Switch, Text } from '@radix-ui/themes'
import { Link } from '@remix-run/react'
import { SITE_TITlE } from '~/consts'

const Header = () => {
  return (
    <Container py="4">
      <Flex display="flex" direction="row" px="4">
        <Box height="8">
          <Link to="/" target="_self">
            <Text as="span" size="6">
              {SITE_TITlE}
            </Text>
          </Link>
        </Box>
        <Flex display="flex" direction="row" height="8">
          <Link to="/" target="_self">
            <Text as="span" size="6">
              About
            </Text>
          </Link>
          <Link to="/" target="_self">
            <Text as="span" size="6">
              Articles
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Container>
  )
}

export { Header }
