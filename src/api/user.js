/* 用户相关请求模块 */
import request from '@/utils/request'

// 用户登录接口
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}
//
// export const sendSms = (data) => {
//   return request({
//     method: 'POST',
//     url: '/user/login',
//     data
//   })
// }
