import { Link as RemixLink } from '@remix-run/react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { SITE_TITlE } from '~/consts'
import {
  githubButtonStyles,
  gridStyles,
  rightComponentsStyles,
  rootStyles,
  siteTitleStyles,
} from './styles.css'
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
            <div>
              <RemixLink to="/about">
                <span>About</span>
              </RemixLink>
            </div>
            <div>
              <RemixLink to="/">
                <span>Articles</span>
              </RemixLink>
            </div>
          </div>
          <div>
            <button type="button" className={githubButtonStyles}>
              <RemixLink to="https://github.com/koralle/blog" target="_blank">
                <GitHubLogoIcon />
              </RemixLink>
            </button>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export { Header }
