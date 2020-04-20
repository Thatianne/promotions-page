import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
	breakpoints: {
		mobile: 540,
		tablet: 900,
		desktop: Infinity
	}
})

Vue.prototype.$getDevice = (typeSize, typeReq) => {
	let type = 'desktop'

	if (!typeSize) {
		type = typeReq.isMobile ? 'mobile' : type
		type = typeReq.isTablet ? 'tablet' : type
		type = typeReq.isDesktop ? 'desktop' : type
	} else {
		type = typeSize
	}
	return type
}

Vue.prototype.$deviceIs = (typeSize, typeReq) => {
	let { isMobile, isTablet, isDesktop } = typeReq

	if (typeSize) {
		isMobile = typeSize === 'mobile'
		isTablet = typeSize === 'tablet'
		isDesktop = typeSize === 'desktop'
	}

	return {
		isMobile,
		isTablet,
		isDesktop
	}
}
