import { Link as RemixLink } from '@remix-run/react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ToggleAppearanceIconButton } from './toggle-appearance-button'
import { SITE_TITlE } from '~/consts'
import { gridStyles, rightComponentsStyles, rootStyles } from './styles.css'
import { Container } from '~/components/container'

const Header = () => {
  return (
    <Container className={rootStyles}>
      <nav className={gridStyles}>
        <div>
          <RemixLink to="/" target="_self">
            <span>{SITE_TITlE}</span>
          </RemixLink>
        </div>
        <div className={rightComponentsStyles}>
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
          <div>
            <ToggleAppearanceIconButton />
          </div>
          <div>
            <RemixLink to="https://github.com/koralle/blog" target="_blank">
              <GitHubLogoIcon />
            </RemixLink>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export { Header }
