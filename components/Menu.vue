<template>
	<div :class="$style.menu">
		<div
			class="f-between"
			style="width: 100%; height: 100%">
			<nuxt-link to="/">
				<Logo />
			</nuxt-link>
			<div
				:class="$style.options"
				class="f-between">
				<nuxt-link to="/login">
					<div
						:class="$style.login"
						class="f-between"
					>
						<Picture
							src="user"
							:class="$style.loginImage"
						/>
						{{ $t('login') }}
					</div>
				</nuxt-link>
				<nuxt-link to="/sign-in">
					Criar conta
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>

import Logo from '~/components/Logo'
import Picture from '~/components/Picture'

export default {
	components: {
		Logo,
		Picture
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

	.options {
		font-size: $font-xxs;
		font-weight: bold;

		.login {
			padding-right: 15px;
			margin-right: 15px;
			border-right: 1px solid $black-light;

			.loginImage {
				width: 15px;
				margin-right: 15px;
			}
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
}
</style>
