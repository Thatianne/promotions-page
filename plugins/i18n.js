import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
	app.i18n = new VueI18n({
		locale: 'pt_br', // store.state.locale
		fallbackLocale: 'en',
		messages: {
			pt_br: require('~/static/i18n/pt_br.json'),
			en: require('~/static/i18n/en.json'),
			es: require('~/static/i18n/es.json')
		}
	})
}
