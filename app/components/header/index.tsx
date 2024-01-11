import { IconButton, Text } from '@radix-ui/themes'
import { Link as RemixLink } from '@remix-run/react'
import { Link } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { SITE_TITlE } from '~/consts'
import { gridStyles, rightComponentsStyles, rootStyles, siteTitleStyles } from './styles.css'
import { Container } from '~/components/container'

const Header = () => {
  return (
    <Container className={rootStyles}>
      <nav className={gridStyles}>
        <div>
          <RemixLink to="/" target="_self">
            <span className={siteTitleStyles}>{SITE_TITlE}</span>
          </RemixLink>
        </div>
        <div className={rightComponentsStyles}>
          <div>
            <Link asChild weight="bold" color="gray">
              <RemixLink to="/about">
                <Text as="span" size="4">
                  About
                </Text>
              </RemixLink>
            </Link>
          </div>
          <div>
            <Link asChild weight="bold" color="gray">
              <RemixLink to="/">
                <Text as="span" size="4">
                  Articles
                </Text>
              </RemixLink>
            </Link>
          </div>
          <div>
            <RemixLink to="https://github.com/koralle/blog" target="_blank">
              <IconButton radius="full" variant="soft" color="gray">
                <GitHubLogoIcon />
              </IconButton>
            </RemixLink>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export { Header }
