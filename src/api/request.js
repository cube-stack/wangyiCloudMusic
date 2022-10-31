import axios from 'axios'

export const hot = (query) => axios({ method: 'get', url: 'http://localhost:8080/api/playlist/hot' }, query)

/**
 * 获取列表
 */
export const tags = (query) => axios({ method: 'get', url: 'http://localhost:8080/api/playlist/highquality/tags' }, query) 