<template>
	<div
		class="f-col-center ProductAccess"
		:class="$style.box"
	>
		<div :class="badgeClasses">
			<Picture :src="arrow" />
			<span>{{ badgeNumber | currency('en') }}</span>
		</div>
		<Picture
			:src="image"
			external
			:class="$style.product"
		/>
		<h3 :class="$style.title">
			{{ title | truncate(55) }}
		</h3>
		<span :class="$style.description">{{ $t('sold-by') }} <a>{{ store }}</a></span>
		<span :class="$style.price">{{ price | currency(locale) }}</span>
	</div>
</template>

<script>
import { mapState } from 'vuex'

import Picture from '~/components/Picture'

export default {
	components: {
		Picture
	},
	props: {
		image: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		store: {
			type: String,
			default: ''
		},
		price: {
			type: Number,
			default: 0.00
		},
		percentage: {
			type: Number,
			default: 0
		}
	},
	computed: {
		badgeClasses () {
			return [
				this.$style.badge,
				this.$style[this.getStyle()]
			]
		},
		arrow () {
			if (this.percentage > 5) {
				return 'up'
			}
			return 'down'
		},
		badgeNumber () {
			if (this.percentage < 0) {
				return (this.percentage * (-1)).toFixed(2)
			}
			return this.percentage.toFixed(2)
		},
		...mapState({
			locale: state => state.app.locale
		})
	},
	methods: {
		getStyle () {
			if (this.percentage <= -10) {
				return 'veryGood'
			} else if (this.percentage <= 0) {
				return 'good'
			} else if (this.percentage > 0 && this.percentage <= 5) {
				return 'caution'
			} else if (this.percentage > 5 && this.percentage <= 10) {
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
	width: 220px;
	height: 325px;
	border-radius: 6px;
	border: 1px solid $gray-light;
	padding: 28px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
	position: relative;

	.product {
		&[class*="Picture"] {
			max-height: 100px;
			margin: 12px 26px 31px;
		}
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

	.badge {
		position: absolute;
		top: 10px;
		left: 0;
		width: 70px;
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
			background-color: $green-smooth-dark
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
