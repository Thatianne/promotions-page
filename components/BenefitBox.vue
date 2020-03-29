<template>
	<div :class="$style.box">
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
		}
	},
	computed: {
		src () {
			let src = types[this.type]
			if (src === undefined) {
				src = types.chart
			}
			return src
		}
	}
}
</script>

<style lang="scss" module>
.box {
	width: 360px;
	height: 360px;
	background-color: $white;
	border-radius: 6px;
	padding: 90px 35px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

	p {
		text-align: center;
	}
	* {
		margin: 0;
		padding: 0;
	}
}

.image {
	width: 50px;
	height: 50px;
}
</style>
