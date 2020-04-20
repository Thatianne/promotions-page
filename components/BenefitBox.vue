<template>
	<div
		class="BenefitBox"
		:class="classes">
		<Picture
			:class="$style.image"
			:src="src" />
		<h3>{{ title }}</h3>
		<p>{{ description }}</p>
	</div>
</template>

<script>
import Picture from '~/components/Picture'

const types = {
	chart: 'group-33',
	clock: 'alarm-clock-2',
	bell: 'ic-notifications-none'
}
const sizes = { fixed: true, fill: true }

export default {
	components: {
		Picture
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		description: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'chart'
		},
		size: {
			type: String,
			default: 'fixed'
		}
	},
	computed: {
		src () {
			let src = types[this.type]
			if (src === undefined) {
				src = types.chart
			}
			return src
		},
		classes () {
			let size = 'fixed'

			if (sizes[this.size]) {
				size = this.size
			}
			return [this.$style.box, this.$style[size]]
		}
	}
}
</script>

<style lang="scss" module>
.box {
	background-color: $white;
	border-radius: 6px;
	padding: 54px 29px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

	> * {
		margin-bottom: 12px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	&.fixed {
		width: 280px;
		height: 250px;
		margin: 8px;
	}

	&.fill {
		width: 100%;
	}

	p {
		text-align: center;
		font-size: $font-xs;
	}
}

.image {
	width: 50px;
	height: 50px;
}
</style>
