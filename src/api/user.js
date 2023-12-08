import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/employee/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/employee/user/info',
    method: 'get',
    params: {}
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
