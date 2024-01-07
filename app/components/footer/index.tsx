import { Link, Separator, Text } from '@radix-ui/themes'
import { Link as RemixLink } from '@remix-run/react'
import { SITE_DESCRIPTION, SITE_TITlE } from '~/consts'
import { Container } from '~/components/container'
import { copyRightStyles, footerRootStyles, topNavigationStyles } from './footer.css'
import {
  aboutNavigationStyles,
  footerNavigationContainerStyles,
  footerNavigationStyles,
  linksNavigationStyles,
} from './footer.css'
import { UnOrderedList } from './UnOrderedList'
import { ListItem } from './ListItem'

const Footer = () => {
  return (
    <div className={footerRootStyles}>
      <Container>
        <div className={footerNavigationContainerStyles}>
          <div className={topNavigationStyles}>
            <div>
              <Link asChild weight="bold" color="gray">
                <RemixLink to="/" target="_self">
                  <Text size="5">{SITE_TITlE}</Text>
                </RemixLink>
              </Link>
            </div>
            <Text size="3">{SITE_DESCRIPTION}</Text>
          </div>
          <div className={footerNavigationStyles}>
            <nav className={aboutNavigationStyles}>
              <div>
                <Text as="span" weight="bold">
                  About
                </Text>
              </div>
              <UnOrderedList>
                <ListItem>
                  <Link asChild color="gray">
                    <RemixLink to="/about" target="_self" referrerPolicy="no-referrer">
                      <Text as="span">このブログについて</Text>
                    </RemixLink>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link asChild color="gray">
                    <RemixLink to="/" target="_blank" referrerPolicy="no-referrer">
                      <Text as="span">koralleについて</Text>
                    </RemixLink>
                  </Link>
                </ListItem>
              </UnOrderedList>
            </nav>
            <nav className={linksNavigationStyles}>
              <div>
                <Text as="span" weight="bold">
                  Links
                </Text>
              </div>
              <UnOrderedList>
                <ListItem>
                  <Link asChild color="gray">
                    <RemixLink to="/" target="_blank" referrerPolicy="no-referrer">
                      <Text as="span">GitHub</Text>
                    </RemixLink>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link asChild color="gray">
                    <RemixLink to="/" target="_blank" referrerPolicy="no-referrer">
                      <Text as="span">Twitter</Text>
                    </RemixLink>
                  </Link>
                </ListItem>
              </UnOrderedList>
            </nav>
          </div>
        </div>
      </Container>
      <Separator orientation="horizontal" size="4" my="2" />
      <div className={copyRightStyles}>
        <Text align="center" as="p">
          &copy; 2024
        </Text>
      </div>
    </div>
  )
}

export { Footer }
