import { AspectRatio, Badge, Box, Card, Flex, Grid, Inset, Text } from '@radix-ui/themes'
import { Eyecatch } from '~/cms/schema'
import { rootStyle } from './ArticleCard.css'

type Props = {
  title: string
  tagList: string[]
  eyecatch?: Eyecatch
}

const ArticleCard = ({ title, tagList, eyecatch }: Props) => {
  return (
    <div className={rootStyle}>
      <Inset clip="padding-box" side="top" pb="current">
        <AspectRatio ratio={1200 / 630}>{eyecatch ? <img src={eyecatch.url} /> : null}</AspectRatio>
      </Inset>
      <div>
        <div>
          <Text as="p" weight="bold" size="5">
            {title}
          </Text>
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
