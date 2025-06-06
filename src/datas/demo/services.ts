import type { DemoItem, RequestDemoList } from './types'

import createFetcher from '../../plugins/createFetcher'
import type { BaseResponse } from '../types'

export const fetchDemoList = (params: RequestDemoList) => {
  return createFetcher<BaseResponse<DemoItem[]>>({
    url: `/api/demo/list`,
    jsonMockup: '/apiMockup/demo/list.json',
    params
  })
}

export const fetchDemoCreate = (params: DemoItem) => {
  return createFetcher<BaseResponse<DemoItem>>({
    method: 'POST',
    url: `/api/demo/create`,
    jsonMockup: '/apiMockup/demo/create.json',
    delay: 3000,
    params
  })
}
