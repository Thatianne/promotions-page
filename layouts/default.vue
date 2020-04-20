<template>
	<div :class="$style.app">
		<Menu />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'

export default {
	components: {
		Menu,
		Footer
	}
}
</script>
<style lang="scss" module>
.app {
	margin: 0 auto;
  min-height: 100vh;
}
</style>
