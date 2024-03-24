import { type BaseSchema, type Output, ValiError, parse } from 'valibot'
import type { AsyncResult, Result } from '~/utils/types'
import { CmsError } from './errors'
import type { CmsClient, CmsClientOpts } from './schema'

const createClient = ({
  serviceName,
  apiKey,
  apiVersion,
}: CmsClientOpts): Result<CmsClient, CmsError> => {
  if (!serviceName || !apiKey || !apiVersion) {
    return {
      status: 'err',
      error: new CmsError('parameter is required (check serviceName, apiKey and apiVersion)'),
    }
  }

  const baseUrl = `https://${serviceName}.microcms.io/api/${apiVersion}`

  const get = async <T extends BaseSchema = BaseSchema>(
    contentId: string,
    schema: T,
  ): AsyncResult<Output<T>, CmsError> => {
    try {
      const response = await fetch(`${baseUrl}/blogs/${contentId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-MICROCMS-API-KEY': apiKey,
        },
      })

      if (!response.ok) {
        return {
          status: 'err',
          error: new CmsError('Unknown error'),
        }
      }

      const data = await response.json()
      const validData = parse(schema, data)
      return { status: 'ok', value: validData }
    } catch (e: unknown) {
      if (e instanceof ValiError) {
        return {
          status: 'err',
          error: new CmsError(e.message),
        }
      }
      if (e instanceof Error) {
        return {
          status: 'err',
          error: new CmsError(e.message),
        }
      }
      return {
        status: 'err',
        error: new CmsError('Unknown error'),
      }
    }
  }

  const getList = async <T extends BaseSchema = BaseSchema>(
    schema: T,
  ): AsyncResult<Output<T>, CmsError> => {
    try {
      const response = await fetch(`${baseUrl}/blogs/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-MICROCMS-API-KEY': apiKey,
        },
      })

      if (!response.ok) {
        return {
          status: 'err',
          error: new CmsError('Unknown error'),
        }
      }

      const data = await response.json()
      const validData = parse(schema, data)

      return { status: 'ok', value: validData }
    } catch (e: unknown) {
      if (e instanceof ValiError) {
        return {
          status: 'err',
          error: new CmsError(e.message),
        }
      }
      if (e instanceof Error) {
        return {
          status: 'err',
          error: new CmsError(e.message),
        }
      }
      return {
        status: 'err',
        error: new CmsError('Unknown error'),
      }
    }
  }

  return {
    status: 'ok',
    value: {
      get,
      getList,
      apiKey,
      apiVersion,
      serviceName,
    },
  }
}

export { createClient }
