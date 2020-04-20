import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
	breakpoints: {
		mobile: 560,
		tablet: 900,
		desktop: Infinity
	}
})

Vue.prototype.$deviceIs = (typeSize) => {
	const isMobile = typeSize === 'mobile'
	const	isTablet = typeSize === 'tablet'
	const	isDesktop = typeSize === 'desktop'

	return {
		isMobile,
		isTablet,
		isDesktop
	}
}
