<template>
	<div
		:class="$style.menu"
		class="f-between">
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
	height: 100px;
	padding: 20px 60px;

	.options {
		font-size: $font-xs;
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
		text-decoration: none;
	}
}
</style>
