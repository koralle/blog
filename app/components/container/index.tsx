import { HTMLAttributes, ReactNode } from 'react'
import { containerInnerStyles, containerRootStyles } from './styles.css'
import { clsx } from 'clsx'

type Props = {
  children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

const Container = ({ children, ...props }: Props) => {
  const { className } = props
  return (
    <div {...props} className={clsx(className, containerRootStyles)}>
      <div className={containerInnerStyles}>{children}</div>
    </div>
  )
}

export { Container }
