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
		},
		external: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		source () {
			if (this.external) {
				return this.src
			}

			const device = this.$deviceIs(this.$mq, this.$device)
			if (device.isMobile) {
				return `/img/${this.src}.${this.extension}`
			} else if (device.isTablet) {
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
