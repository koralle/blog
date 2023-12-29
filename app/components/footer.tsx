import { Box, Container, Grid, Link, Separator, Text } from '@radix-ui/themes'
import { Link as RemixLink } from '@remix-run/react'
import { SITE_DESCRIPTION, SITE_TITlE } from '~/consts'

const Footer = () => {
  return (
    <Box width="100%" px="4" style={{ alignSelf: 'end' }}>
      <Container>
        <Box py="4">
          <Box>
            <Link asChild weight="bold" color="gray">
              <RemixLink to="/" target="_self">
                <Text size="5">{SITE_TITlE}</Text>
              </RemixLink>
            </Link>
          </Box>
          <Text size="3">{SITE_DESCRIPTION}</Text>
        </Box>
        <Grid columns="2">
          <Box>
            <Box>
              <Text as="span" weight="bold">
                About
              </Text>
            </Box>
            <Box py="2">
              <Link asChild color="gray">
                <RemixLink to="/" target="_blank" referrerPolicy="no-referrer">
                  <Text as="span">このブログについて</Text>
                </RemixLink>
              </Link>
            </Box>
            <Box py="2">
              <Link asChild color="gray">
                <RemixLink to="/" target="_blank" referrerPolicy="no-referrer">
                  <Text as="span">koralleについて</Text>
                </RemixLink>
              </Link>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text as="span" weight="bold">
                Links
              </Text>
            </Box>
            <Box py="2">
              <Link asChild color="gray">
                <RemixLink to="/" target="_blank" referrerPolicy="no-referrer">
                  <Text as="span">GitHub</Text>
                </RemixLink>
              </Link>
            </Box>
            <Box py="2">
              <Link asChild color="gray">
                <RemixLink to="/" target="_blank" referrerPolicy="no-referrer">
                  <Text as="span">Twitter</Text>
                </RemixLink>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Container>
      <Separator orientation="horizontal" size="4" my="2" />
      <Box width="100%" pt="2" pb="4">
        <Text align="center" as="p">
          &copy; 2023
        </Text>
      </Box>
    </Box>
  )
}

export { Footer }
