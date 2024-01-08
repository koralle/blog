import { ReactNode } from 'react'
import { rootStyle } from './styles.css'

const ListItem = ({ children }: { children?: ReactNode }) => {
  return <li className={rootStyle}>{children}</li>
}

export { ListItem }
