import request from './index.js'
export function addThing(data) {
  return request({
    url: '/addThing',
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    data
  })
}
export function findAll() {
  return request({
    url: '/findAll',
    method: 'get',
  })
}
export function deleteOne(data) {
  return request({
    url: '/deleteOne',
    method: 'delete',
    data
  })
}
export function searchThing(data) {
  return request({
    url: '/searchThing',
    method: 'post',
    data
  })
}
export function controlIsDone(data) {
  return request({
    url: '/controlIsDone',
    method: 'post',
    data
  })
}
export function selectAll(data) {
  return request({
    url: '/selectAll',
    method: 'post',
    data
  })
}
export function deleteDone(data) {
  return request({
    url: '/deleteDone',
    method: 'delete',
    data
  })
}
