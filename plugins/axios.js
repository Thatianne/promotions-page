import Vue from 'vue'
import $axios from 'axios'

export const axios = $axios.create({
	baseURL: 'http://localhost:3333'
})

Vue.prototype.$axios = axios
