import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/employee/emp/page',
    method: 'get',
    params: data
  })
}

export function createEmp(data) {
  return request({
    url: '/employee/emp',
    method: 'POST',
    data
  })
}

export function updateEmp(data) {
  return request({
    url: '/employee/emp',
    method: 'PUT',
    data
  })
}

export function deleteEmp(data) {
  return request({
    url: '/employee/emp',
    method: 'DELETE',
    data
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
