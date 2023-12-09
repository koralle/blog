import { afterAll, afterEach, beforeAll } from 'vitest'
import { mockServer } from 'tests/mocks/server'

beforeAll(() => mockServer.listen())
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())
