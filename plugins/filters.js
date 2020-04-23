import Vue from 'vue'

export function truncate (string, value) {
	return `${string.substring(0, value)} ...`
}

export function currency (number, value) {
	let locale = 'pt-BR'
	let currency = 'BRL'
	if (value === 'en') {
		locale = value
		currency = 'USD'
	} else if (value === 'es') {
		locale = value
		currency = 'EUR'
	}
	return (parseFloat(number)).toLocaleString(locale, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})
}

Vue.filter('truncate', truncate)
Vue.filter('currency', currency)
