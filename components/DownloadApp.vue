<template>
	<div
		:class="classes"
		class="f-between DownloadApp">
		<Picture src="google-play_3" />
		<Picture src="download-on-the-app-store" />
	</div>
</template>

<script>
import Picture from '~/components/Picture'

export default {
	components: {
		Picture
	},
	props: {
		size: {
			type: String,
			default: 'lg'
		}
	},
	computed: { // TODO use size to change picture src
		classes () {
			return [this.$style[this.size]]
		}
	}
}
</script>

<style lang="scss" module>
.lg {
	img {
		height: 45px;
	}
}

.md {
	img {
		height: 32px;
	}
}

.sm {
	img {
		height: 28px;
	}
}
</style>
