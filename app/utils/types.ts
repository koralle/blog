type Success<T> = { status: 'ok'; value: T }
type Failure<E extends Error> = { status: 'err'; error: E }

type Result<T, E extends Error> = Success<T> | Failure<E>

type AsyncResult<T, E extends Error = Error> = Promise<Result<T, E>>

export type { AsyncResult, Failure, Result, Success }
