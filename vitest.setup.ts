import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { mockServer } from 'tests/mocks/server'

beforeAll(() => {
  vi.stubEnv('MICROCMS_API_KEY', 'test')
  vi.stubEnv('MICROCMS_SERVICE_NAME', 'test-service-name')
  vi.stubEnv('MICROCMS_API_VERSION', 'v1')
  mockServer.listen({ onUnhandledRequest: 'error' })
})
afterEach(() => mockServer.resetHandlers())
afterAll(() => {
  vi.unstubAllEnvs()
  mockServer.close()
})
