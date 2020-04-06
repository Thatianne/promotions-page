<template>
	<div
		class="f-col-center ProductAccess"
		:class="$style.box"
	>
		<Picture
			:src="picture"
			extension="jpg"
		/>
		<h3 :class="$style.title">
			{{ title }}
		</h3>
		<span :class="$style.description">Vendido por <a>{{ seller }}</a></span>
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
		color: $gray-light;
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
}
</style>
