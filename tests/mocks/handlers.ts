import { HttpHandler } from 'msw'
import { fetchContentList, fetchSingleContent } from './api/v1/blogs'

type HttpHandlers = readonly HttpHandler[]

export const handlers: HttpHandlers = [fetchSingleContent, fetchContentList]
