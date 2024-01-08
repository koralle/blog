import { Badge, Link, Text } from '@radix-ui/themes'
import { Eyecatch } from '~/cms/schema'
import { rootStyle } from './styles.css'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import { Link as RemixLink } from '@remix-run/react'
import { Skelton } from './Skelton'

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
          <Link>
            <RemixLink to={`/articles/${id}`}>
              <Text as="p" weight="bold" size="5">
                {articleTitle}
              </Text>
            </RemixLink>
          </Link>
        </div>
        <div>
          {tagList.map((tag) => (
            <Badge>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ArticleCard }
