import { axios } from '~/plugins/axios'

export const list = () => axios.get('/stores').then(res => res.data)
