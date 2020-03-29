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
		},
		extension: {
			type: String,
			default: 'png'
		}
	},
	computed: {
		source () {
			if (this.$device.isMobile) {
				return `/img/${this.src}.${this.extension}`
			} else if (this.$device.isTablet) {
				return `/img/${this.src}@2x.${this.extension}`
			} else {
				return `/img/${this.src}@3x.${this.extension}`
			}
		}
	}
}
</script>
<style lang="scss" module>
</style>
