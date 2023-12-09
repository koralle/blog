import { HttpHandler } from 'msw'

type HttpHandlers = readonly HttpHandler[]

export const handlers: HttpHandlers = []
