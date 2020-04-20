<template>
	<header :class="classes">
		<div
			class="f-between"
			:class="$style.headerBox"
		>
			<nuxt-link to="/">
				<Logo />
			</nuxt-link>
			<div
				:class="$style.options"
				class="f-between">
				<Picture
					src="user"
					:class="$style.loginImage"
				/>
				<div
					v-if="$mq !== 'mobile'"
					:class="$style.links"
				>
					<nuxt-link to="/login">
						{{ $t('login') }}
					</nuxt-link>
					<nuxt-link
						to="/sign-in"
						:class="$style.leftBorder">
						{{ $t('create-account') }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

import Logo from '~/components/Logo'
import Picture from '~/components/Picture'

export default {
	components: {
		Logo,
		Picture
	},
	computed: {
		classes () {
			const device = this.$getDevice(this.$mq, this.$device)
			return [this.$style.menu, this.$style[device]]
		}
	},
	methods: {
	}
}
</script>

<style lang="scss" module>
.menu {
	height: 90px;
	padding: 20px 60px;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	background-color: $white;
	z-index: 3;
	// box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

	.headerBox {
		width: 100%;
		height: 100%
	}

	.options {
		font-size: $font-xxs;
		font-weight: bold;

		.loginImage {
			width: 15px;
			margin-right: 15px;
		}

		.leftBorder {
			padding-left: 15px;
			margin-left: 15px;
			border-left: 1px solid $black-light;
		}
	}

	a {
		height: 100%;
		width: initial;
		text-decoration: none;

		&:hover, > div:hover {
			color: $green-smooth-dark;
		}
	}

	&.mobile {
		padding: 20px 30px;

		.headerBox {
			justify-content: center;
		}

		.options {
			margin: 0;
			width: 22px;
			position: absolute;
			right: 30px;
		}

		.appSection {
			flex-wrap: wrap;
		}
	}
}
</style>
