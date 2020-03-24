<template>
	<div :class="$style.app">
		<Menu />
		<nuxt />
	</div>
</template>

<script>
import Menu from '~/components/Menu'

export default {
	components: {
		Menu
	}
}
</script>
<style lang="scss" module>
.app {
	margin: 0 auto;
  min-height: 100vh;
}
</style>
