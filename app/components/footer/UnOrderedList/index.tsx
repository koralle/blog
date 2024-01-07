import { ReactNode } from 'react'
import { rootStyle } from './unOrderedList.css'

const UnOrderedList = ({ children }: { children?: ReactNode }) => {
  return <ul className={rootStyle}>{children}</ul>
}

export { UnOrderedList }
