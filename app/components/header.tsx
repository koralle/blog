import { Box, Container, Flex, Grid, Link, Text } from '@radix-ui/themes'
import { Link as RemixLink } from '@remix-run/react'
import { SITE_TITlE } from '~/consts'

const Header = () => {
  return (
    <Container px="4" py="4">
      <Grid flow="column" columns="auto 1fr">
        <Box pr="4">
          <Link asChild weight="medium" color="gray">
            <RemixLink to="/" target="_self">
              <Text as="span" size="6">
                {SITE_TITlE}
              </Text>
            </RemixLink>
          </Link>
        </Box>
        <Box width="auto">
          <Flex display="flex" justify="end">
            <Box px="4">
              <Link asChild weight="bold" color="gray">
                <RemixLink to="/" target="_self">
                  <Text as="span" size="4">
                    About
                  </Text>
                </RemixLink>
              </Link>
            </Box>
            <Box px="4">
              <Link asChild weight="bold" color="gray">
                <RemixLink to="/" target="_self">
                  <Text as="span" size="4">
                    Articles
                  </Text>
                </RemixLink>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Container>
  )
}

export { Header }
