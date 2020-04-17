import { axios } from '~/plugins/axios'

export const list = ({ limit = 10, offset = 0 }) => axios.get(`/products?limit=${limit}&offset=${offset}`)
	.then(res => res.data)
