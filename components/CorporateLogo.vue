<template>
	<div
		class="CorporationLogo"
		:class="classes">
		<Picture src="logo-placeholder-2-x" />
	</div>
</template>

<script>
import Picture from '~/components/Picture'

// const types = ['default', 'danger', 'warning', 'primary', 'info']

export default {
	components: {
		Picture
	},
	props: {
		type: {
			type: String,
			default: 'light'
		}
	},
	computed: {
		classes () {
			const classes = [this.$style.box]
			classes.push(this.$style[this.type])
			return classes
		}
	}
}
</script>

<style lang="scss" module>
.box {
	width: 80px;
	height: 85px;
	padding: 12px 16px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
	border-radius: 6px;

	[class*="Picture"] {
		height: 100%;
		width: 100%;
	}

	&.light {
		background-color: $white;
	}
	&.danger {
		background-color: $red-light;
	}
	&.warning {
		background-color: $yellow;
	}
	&.primary {
		background-color: $blue;
	}
	&.info {
		background-color: $purple;
	}
}
</style>
