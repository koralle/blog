import { rootStyle } from './styles.css'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import { Link } from '@remix-run/react'
import { Skelton } from '../skelton'

type Props = {
  id: string
  articleTitle: string
  tagList: string[]
  eyeCatchUrl?: string
}

const ArticleCard = ({ id, articleTitle, tagList, eyeCatchUrl: eyecatchUrl }: Props) => {
  return (
    <div className={rootStyle}>
      <div>
        <AspectRatio ratio={1200 / 630}>
          {eyecatchUrl ? <img src={eyecatchUrl} /> : <Skelton id={id} />}
        </AspectRatio>
      </div>
      <div>
        <div>
          <Link to={`/articles/${id}`}>
            <span>{articleTitle}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { ArticleCard }
