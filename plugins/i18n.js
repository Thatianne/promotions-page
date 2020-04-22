import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
	app.i18n = new VueI18n({
		locale: store.state.app.locale,
		fallbackLocale: 'en',
		messages: {
			pt_br: require('~/assets/i18n/pt_br.json'),
			en: require('~/assets/i18n/en.json'),
			es: require('~/assets/i18n/es.json')
		}
	})
}
