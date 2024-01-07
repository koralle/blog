import { HTMLAttributes, ReactNode } from 'react'
import { containerInnerStyles, contanerRootStyles } from './container.css'
import { clsx } from 'clsx'

type Props = {
  children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

const Container = ({ children, ...props }: Props) => {
  const { className } = props
  return (
    <div {...props} className={clsx(className, contanerRootStyles)}>
      <div className={containerInnerStyles}>{children}</div>
    </div>
  )
}

export { Container }
