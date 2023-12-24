import {
  array,
  BaseSchema,
  intersect,
  minLength,
  minValue,
  nonNullish,
  number,
  object,
  optional,
  Output,
  safeInteger,
  string,
  url,
} from 'valibot'
import { AsyncResult } from '~/utils/types'
import { CmsError } from './errors'

const contentIdSchema = object({
  id: nonNullish(string([minLength(0)]), "Field `id` mustn't be nullish."),
})
type ContentId = Output<typeof contentIdSchema>

const cmsDateSchema = object({
  createdAt: nonNullish(string([]), "Field `createdAt` mustn't be nullish."),
  updatedAt: nonNullish(string([]), "Field `updatedAt` mustn't be nullish."),
  publishedAt: optional(string([])),
  revisedAt: optional(string([])),
})
type CMSDate = Output<typeof cmsDateSchema>

const titleSchema = object({
  title: nonNullish(string([minLength(0)]), "Field `title` mustn't be nullish."),
})

type Title = Output<typeof titleSchema>

const contentSchema = object({
  content: optional(string()),
})

type Content = Output<typeof contentSchema>

const eyecatchSchema = object({
  url: nonNullish(string([url('Field `url` must be a valid URL.')])),
  width: optional(number([minValue(0), safeInteger('Field `width` must be a safe integer.')])),
  height: optional(number([minValue(0), safeInteger('Field `height` must be a safe integer.')])),
})

type Eyecatch = Output<typeof eyecatchSchema>

const categorySchema = intersect([
  contentIdSchema,
  cmsDateSchema,
  object({
    name: nonNullish(string([minLength(0)]), "Field `name` mustn't be nullish."),
  }),
])

type Category = Output<typeof categorySchema>

const cmsBlogContentSchema = intersect([
  contentIdSchema,
  cmsDateSchema,
  titleSchema,
  contentSchema,
  optional(
    object({
      eyecatch: optional(eyecatchSchema),
      category: optional(categorySchema),
    }),
  ),
])

type CmsBlogContent = Output<typeof cmsBlogContentSchema>

const cmsBlogContentListSchema = object({
  contents: array(cmsBlogContentSchema),
  totalCount: nonNullish(
    number([minValue(0), safeInteger('Field `totalCount` must be a safe integer.')]),
    "Field `totalCount` mustn't be nullish.",
  ),
  offset: nonNullish(
    number([minValue(0), safeInteger('Field `offset` must be a safe integer.')]),
    "Field `totalCount` mustn't be nullish.",
  ),
  limit: nonNullish(
    number([minValue(0), safeInteger('Field `limit` must be a safe integer.')]),
    "Field `totalCount` mustn't be nullish.",
  ),
})

type CmsBlogContentList = Output<typeof cmsBlogContentListSchema>['contents']

type GetContentFn = <T extends BaseSchema = BaseSchema>(
  contentId: string,
  schema: T,
) => AsyncResult<Output<T>, CmsError>

type GetListFn = <T extends BaseSchema = BaseSchema>(schema: T) => AsyncResult<Output<T>, CmsError>

type CmsClientOpts = {
  serviceName: string
  apiKey: string
  apiVersion: string
  retryCount?: number
}

type CmsClient = {
  serviceName: string
  apiKey: string
  apiVersion: string
  retryCount?: number
} & { get: GetContentFn; getList: GetListFn }

export {
  categorySchema,
  cmsBlogContentListSchema,
  cmsBlogContentSchema,
  cmsDateSchema,
  contentSchema,
  eyecatchSchema,
  titleSchema,
}
export type {
  Category,
  CmsBlogContent,
  CmsBlogContentList,
  CmsClient,
  CmsClientOpts,
  CMSDate,
  Content,
  ContentId,
  Eyecatch,
  GetContentFn,
  GetListFn,
  Title,
}
