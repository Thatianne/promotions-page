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
			return [this.$style.downloadApp, this.$style[this.size]]
		}
	}
}
</script>

<style lang="scss" module>
.downloadApp {

	[class*="Picture"] {
		cursor: pointer;
		&:hover {
			box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
		}
	}

	&.lg {
		img {
			height: 45px;
		}
	}

	&.md {
		img {
			height: 32px;
		}
	}

	&.sm {
		img {
			height: 28px;
		}
	}
}

</style>
