import { IconButton, Text } from '@radix-ui/themes'
import { Link as RemixLink } from '@remix-run/react'
import { Link } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ToggleAppearanceIconButton } from '~/components/header/ToggleAppearanceIconButton'
import { SITE_TITlE } from '~/consts'
import {
  gridStyles,
  rightComponentsContainerStyles,
  rightComponentsStyles,
  rootStyles,
} from './header.css'
import { Container } from '~/components/container'

const Header = () => {
  return (
    <Container className={rootStyles}>
      <div className={gridStyles}>
        <div>
          <Link asChild weight="medium" color="gray">
            <RemixLink to="/" target="_self">
              <Text as="span" size="6">
                {SITE_TITlE}
              </Text>
            </RemixLink>
          </Link>
        </div>
        <div className={rightComponentsContainerStyles}>
          <div className={rightComponentsStyles}>
            <nav>
              <Link asChild weight="bold" color="gray">
                <RemixLink to="/about">
                  <Text as="span" size="4">
                    About
                  </Text>
                </RemixLink>
              </Link>
            </nav>
            <nav>
              <Link asChild weight="bold" color="gray">
                <RemixLink to="/">
                  <Text as="span" size="4">
                    Articles
                  </Text>
                </RemixLink>
              </Link>
            </nav>
            <div>
              <ToggleAppearanceIconButton />
            </div>
            <nav>
              <RemixLink to="https://github.com/koralle/blog" target="_blank">
                <IconButton radius="full" variant="soft" color="gray">
                  <GitHubLogoIcon />
                </IconButton>
              </RemixLink>
            </nav>
          </div>
        </div>
      </div>
    </Container>
  )
}

export { Header }
