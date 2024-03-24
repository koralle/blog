import { http, HttpResponse } from 'msw'
import type { FetchContentListResponseBody, FetchSingleContentResponseBody } from '~/cms/schema'

const serviceName = import.meta.env.MICROCMS_SERVICE_NAME
const apiVersion = import.meta.env.MICROCMS_API_VERSION
const baseUrl = `https://${serviceName}.microcms.io/api/${apiVersion}`

const fetchSingleContent = http.get(`${baseUrl}/blogs/:content_id`, ({ request, params }) => {
  const { content_id } = params
  return HttpResponse.json<FetchSingleContentResponseBody>({
    id: content_id as string,
    createdAt: 'now',
    updatedAt: 'now',
    title: 'Test Single Content Title',
    content: '<h1>Test Single Content</h1>',
  })
})

const fetchContentList = http.get(`${baseUrl}/blogs`, ({ request, params }) => {
  return HttpResponse.json<FetchContentListResponseBody>({
    contents: [
      {
        id: 'test_1',
        createdAt: 'now',
        updatedAt: 'now',
        title: 'Test Single Content Title 1',
        content: '<h1>Test Content 1</h1>',
      },
      {
        id: 'test_2',
        createdAt: 'now',
        updatedAt: 'now',
        title: 'Test Single Content Title 2',
        content: '<h1>Test Content 2</h1>',
      },
    ],
    totalCount: 2,
    offset: 0,
    limit: 50,
  })
})

export { fetchContentList, fetchSingleContent }
