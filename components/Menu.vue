<template>
	<div>
		<nuxt-link>
			<Logo />
		</nuxt-link>
		<div>
			<nuxt-link to="">
				Entrar
			</nuxt-link>
			<nuxt-link to="">
				Criar conta
			</nuxt-link>
		</div>
	</div>
</template>

<script>

import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo
	},
	methods: {
	}
}
</script>

<style lang="scss" module>

</style>
