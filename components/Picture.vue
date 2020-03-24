<template>
	<img
		class="Picture"
		:src="source" />
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: ''
		}
	},
	computed: {
		source () {
			if (this.$device.isMobile) {
				return `/img/${this.src}.png`
			} else if (this.$device.isTablet) {
				return `/img/${this.src}@2x.png`
			} else {
				return `/img/${this.src}@3x.png`
			}
		}
	}
}
</script>
<style lang="scss" module>
</style>
