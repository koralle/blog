import { extendedTest } from 'tests/extended'
import { describe, expect, expectTypeOf } from 'vitest'
import type { CmsBlogContent } from '~/cms/schema'
import { cmsBlogContentListSchema, cmsBlogContentSchema } from '~/cms/schema'

describe('fetch a blog content', async () => {
  extendedTest('fetch a blog content', async ({ cmsTestClient }) => {
    const fetchResult = await cmsTestClient.get('test', cmsBlogContentSchema)
    if (fetchResult.status === 'err') {
      return
    }

    const blogContent = fetchResult.value
    expect(blogContent.id).toBe('test')
    expectTypeOf(blogContent).toMatchTypeOf<CmsBlogContent>()
    expect(blogContent.content).toBe('<h1>Test Single Content</h1>')
  })

  extendedTest('fetch blog content list', async ({ cmsTestClient }) => {
    const fetchResult = await cmsTestClient.getList(cmsBlogContentListSchema)
    if (fetchResult.status === 'err') {
      return
    }

    const blogContentList = fetchResult.value
    expect(blogContentList.contents.length).toBe(2)
  })
})
