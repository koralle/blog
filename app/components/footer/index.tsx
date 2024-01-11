import { Link, Separator, Text } from '@radix-ui/themes'
import { Link as RemixLink } from '@remix-run/react'
import { SITE_DESCRIPTION, SITE_TITlE } from '~/consts'
import { Container } from '~/components/container'
import {
  copyRightStyles,
  footerRootStyles,
  otherNavigationStyles,
  siteDescriptionStyles,
  topNavigationStyles,
} from './styles.css'
import { ListItem } from './list-item'
import { siteTitleStyles } from '../header/styles.css'

const Footer = () => {
  return (
    <div className={footerRootStyles}>
      <Container>
        <nav>
          <div className={topNavigationStyles}>
            <div>
              <RemixLink to="/" target="_self">
                <span className={siteTitleStyles}>{SITE_TITlE}</span>
              </RemixLink>
            </div>
            <span className={siteDescriptionStyles}>{SITE_DESCRIPTION}</span>
          </div>
          <div className={otherNavigationStyles}>
            <div>
              <div>
                <Text as="span" weight="bold">
                  About
                </Text>
              </div>
              <ul>
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
              </ul>
            </div>
            <div>
              <div>
                <Text as="span" weight="bold">
                  Links
                </Text>
              </div>
              <ul>
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
              </ul>
            </div>
          </div>
        </nav>
      </Container>
      <Separator orientation="horizontal" size="4" mt="2" />
      <div className={copyRightStyles}>
        <Text align="center" as="p">
          &copy; 2024
        </Text>
      </div>
    </div>
  )
}

export { Footer }
