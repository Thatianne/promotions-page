<template>
	<div
		class="f-col-center ProductAccess"
		:class="$style.box"
	>
		<div :class="tagClasses">
			<Picture :src="arrow" />
			<span>$ {{ access }}</span>
		</div>
		<Picture
			:src="picture"
			extension="jpg"
		/>
		<h3 :class="$style.title">
			{{ title }}
		</h3>
		<span :class="$style.description">{{ $t('sold-by') }} <a>{{ seller }}</a></span>
		<span :class="$style.price">R$ {{ price }}</span>
	</div>
</template>

<script>
import Picture from '~/components/Picture'

export default {
	components: {
		Picture
	},
	props: {
		picture: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		seller: {
			type: String,
			default: ''
		},
		price: {
			type: Number,
			default: 0.00
		},
		access: {
			type: Number,
			default: 0
		}
	},
	computed: {
		tagClasses () {
			return [
				this.$style.tag,
				this.$style[this.getStyle()]
			]
		},
		arrow () {
			if (this.access > 5) {
				return 'up'
			}
			return 'down'
		}
	},
	methods: {
		getStyle () {
			if (this.access <= -10) {
				return 'veryGood'
			} else if (this.access <= 0) {
				return 'good'
			} else if (this.access > 0 && this.access <= 5) {
				return 'caution'
			} else if (this.access > 5 && this.access <= 10) {
				return 'bad'
			} else {
				return 'veryBad'
			}
		}
	}
}
</script>

<style lang="scss" module>
.box {
	width: 215px;
	height: 325px;
	border-radius: 6px;
	border: 1px solid $gray-light;
	padding: 28px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
	position: relative;

	[class*="Picture"] {
		max-height: 150px;
	}

	.title {
		font-size: $font-xs;
	}

	.title, span {
		text-align: center;
	}

	.description {
		color: $gray;
		font-size: $font-xxs;
		font-weight: 500;
		margin-top: 16px;

		a {
			color: $blue;
		}
	}

	.price {
		font-size: $font-sm;
		color: $blue-dark;
		margin-top: 8px;
		font-weight: 600;
	}

	.tag {
		position: absolute;
		top: 10px;
		left: 0;
		width: 60px;
		height: 32px;
		border-radius: 0 6px 6px 0;
		font-size: $font-xxs;
		font-weight: 600;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		&.veryGood {
			background-color: $green-dark;
		}
		&.good {
			background-color: $green-smooth
		}
		&.caution {
			background-color: $yellow;
		}
		&.bad {
			background-color: $gray;
		}
		&.veryBad {
			background-color: $red;
		}

		span {
			color: $white;
		}
		[class*="Picture"] {
			height: 10px;
			margin: 0 4px 2px 0;
		}
	}
}
</style>
