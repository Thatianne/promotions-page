<template>
	<div :class="$style.menu">
		<nuxt-link to="/">
			<Logo />
		</nuxt-link>
		<div>
			<nuxt-link to="/login">
				Entrar
			</nuxt-link>
			<nuxt-link to="/sign-in">
				Criar conta
			</nuxt-link>
		</div>
	</div>
</template>

<script>

import Logo from '~/components/Logo'

export default {
	components: {
		Logo
	},
	methods: {
	}
}
</script>

<style lang="scss" module>
.menu {
	height: 64px;
	display: flex;
}
</style>
