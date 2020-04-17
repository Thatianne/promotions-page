import Vue from 'vue'

export function truncate (string, value) {
	return `${string.substring(0, value)} ...`
}

Vue.filter('truncate', truncate)
