import { Link } from '@remix-run/react'
import { SITE_DESCRIPTION, SITE_TITlE } from '~/consts'
import { Container } from '~/components/container'
import {
  copyRightStyles,
  footerRootStyles,
  otherNavigationStyles,
  separatorStyles,
  siteDescriptionStyles,
  siteTitleStyles,
  topNavigationStyles,
} from './styles.css'
import { ListItem } from './list-item'
import { Root as Separator } from '@radix-ui/react-separator'

const Footer = () => {
  return (
    <div className={footerRootStyles}>
      <Container>
        <div>
          <div className={topNavigationStyles}>
            <div>
              <Link to="/" target="_self" className={siteTitleStyles}>
                <span>{SITE_TITlE}</span>
              </Link>
            </div>
            <span className={siteDescriptionStyles}>{SITE_DESCRIPTION}</span>
          </div>
          <div className={otherNavigationStyles}>
            <nav>
              <div>
                <span>About</span>
              </div>
              <ul>
                <ListItem>
                  <Link to="/about" target="_self" referrerPolicy="no-referrer">
                    <span>このブログについて</span>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/" target="_blank" referrerPolicy="no-referrer">
                    <span>koralleについて</span>
                  </Link>
                </ListItem>
              </ul>
            </nav>
            <nav>
              <div>
                <span>Links</span>
              </div>
              <ul>
                <ListItem>
                  <Link
                    to="https://github.com/koralle"
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <span>GitHub</span>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/" target="_blank" referrerPolicy="no-referrer">
                    <span>Twitter</span>
                  </Link>
                </ListItem>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
      <Separator className={separatorStyles} />
      <div>
        <span className={copyRightStyles}>&copy; 2024</span>
      </div>
    </div>
  )
}

export { Footer }
