export const state = () => ({
	locale: 'pt_br'
})

export const mutations = {
	setLocale (state, locale) {
		state.locale = locale
	}
}
