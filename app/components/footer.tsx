import { Box, Container, Flex, Grid, Heading, Section, Separator, Text } from '@radix-ui/themes'
import { Link } from '@remix-run/react'
import { SITE_TITlE } from '~/consts'

const Footer = () => {
  return (
    <Box width="100%" px="4" pt="4" style={{ alignSelf: 'end' }}>
      <Container>
        <Link to="/" target="_self">
          {SITE_TITlE}
        </Link>
        <Grid columns="2">
          <Box>
            <Text as="span">About</Text>
          </Box>
          <Box>
            <Text as="span">Links</Text>
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
