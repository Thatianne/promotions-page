
module.exports = {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		title: 'Landingpage',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_name || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },

	css: [
		'~/assets/scss/_base.scss'
	],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [
		'~/plugins/media-query.js',
		'~/plugins/i18n.js',
		'~/plugins/axios.js',
		'~/plugins/filters.js'
	],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module'
	],
	/*
  ** Nuxt.js modules
  */
	modules: [
		'@nuxtjs/style-resources',
		'nuxt-webfontloader'
	],
	webfontloader: {
		google: {
			families: ['Roboto:400,500,600']
		}
	},
	styleResources: {
		scss: [
			'assets/scss/_vars.scss'
		]
	},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend (config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
