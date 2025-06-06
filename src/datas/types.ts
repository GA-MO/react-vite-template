export type BaseResponse<T> = {
  code: number
  message: string
  data: T
}

export type ServiceError = {
  title: string
  message: string
}
