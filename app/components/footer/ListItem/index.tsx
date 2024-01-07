import { ReactNode } from 'react'
import { rootStyle } from './listItem.css'

const ListItem = ({ children }: { children?: ReactNode }) => {
  return <li className={rootStyle}>{children}</li>
}

export { ListItem }
