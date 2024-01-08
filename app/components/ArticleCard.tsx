import { Badge, Box, Card, Flex, Grid, Inset, Text } from '@radix-ui/themes'
import { Eyecatch } from '~/cms/schema'
import { rootStyle } from './ArticleCard.css'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

type Props = {
  title: string
  tagList: string[]
  eyecatch?: Eyecatch
}

const ArticleCard = ({ title, tagList, eyecatch }: Props) => {
  return (
    <Card className={rootStyle}>
      <Inset clip="padding-box" side="top" pb="current">
        <AspectRatio ratio={1200 / 630}>{eyecatch ? <img src={eyecatch.url} /> : null}</AspectRatio>
      </Inset>
      <Grid gap="4">
        <Box>
          <Text as="p" weight="bold" size="5">
            {title}
          </Text>
        </Box>
        <Flex direction="row" gap="2">
          {tagList.map((tag) => (
            <Badge>{tag}</Badge>
          ))}
        </Flex>
      </Grid>
    </Card>
  )
}

export { ArticleCard }
