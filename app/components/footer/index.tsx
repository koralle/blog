import { Link } from '@remix-run/react'
import { SITE_DESCRIPTION, SITE_TITlE } from '~/consts'
import { Container } from '~/components/container'
import {
  copyRightStyles,
  footerRootStyles,
  otherNavigationStyles,
  topNavigationStyles,
} from './styles.css'
import { ListItem } from './list-item'

const Footer = () => {
  return (
    <div className={footerRootStyles}>
      <Container>
        <nav>
          <div className={topNavigationStyles}>
            <div>
              <Link to="/" target="_self">
                <span>{SITE_TITlE}</span>
              </Link>
            </div>
            <span>{SITE_DESCRIPTION}</span>
          </div>
          <div className={otherNavigationStyles}>
            <div>
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
            </div>
            <div>
              <div>
                <span>Links</span>
              </div>
              <ul>
                <ListItem>
                  <Link to="/" target="_blank" referrerPolicy="no-referrer">
                    <span>GitHub</span>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/" target="_blank" referrerPolicy="no-referrer">
                    <span>Twitter</span>
                  </Link>
                </ListItem>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
      <hr />
      <div className={copyRightStyles}>
        <span>&copy; 2024</span>
      </div>
    </div>
  )
}

export { Footer }
