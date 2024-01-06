import { Box, Container, Flex, Grid, IconButton, Text } from '@radix-ui/themes'
import { Link as RemixLink } from '@remix-run/react'
import { Link } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ToggleAppearanceIconButton } from '~/components/header/ToggleAppearanceIconButton'
import { SITE_TITlE } from '~/consts'

const Header = () => {
  return (
    <Container px="4" py="4">
      <Grid flow="column" columns="max-content 1fr" display="grid" height="100%">
        <Box pr="4">
          <Link asChild weight="medium" color="gray">
            <RemixLink to="/" target="_self">
              <Text as="span" size="6">
                {SITE_TITlE}
              </Text>
            </RemixLink>
          </Link>
        </Box>
        <Box asChild>
          <Flex display="flex" justify="end" gap="4">
            <Box px="4">
              <Link asChild weight="bold" color="gray">
                <RemixLink to="/about">
                  <Text as="span" size="4">
                    About
                  </Text>
                </RemixLink>
              </Link>
            </Box>
            <Box px="4">
              <Link asChild weight="bold" color="gray">
                <RemixLink to="/">
                  <Text as="span" size="4">
                    Articles
                  </Text>
                </RemixLink>
              </Link>
            </Box>
            <Box>
              <ToggleAppearanceIconButton />
            </Box>
            <Box>
              <RemixLink to="https://github.com/koralle/blog" target="_blank">
                <IconButton radius="full" variant="soft" color="gray">
                  <GitHubLogoIcon />
                </IconButton>
              </RemixLink>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Container>
  )
}

export { Header }
