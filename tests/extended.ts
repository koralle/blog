import { test } from 'vitest'
import { createClient } from '~/cms/client'
import { CmsClient } from '~/cms/schema'

type ExtendedTestFixtures = {
  cmsTestClient: CmsClient
}

const extendedTest = test.extend<ExtendedTestFixtures>({
  cmsTestClient: async ({ }, use) => {
    const clientResult = createClient({
      serviceName: import.meta.env.MICROCMS_SERVICE_NAME!,
      apiKey: import.meta.env.MICROCMS_API_KEY!,
      apiVersion: import.meta.env.MICROCMS_API_VERSION!,
    })

    if (clientResult.status === 'err') {
      return
    }

    await use(clientResult.value)
  },
})

export { extendedTest }
