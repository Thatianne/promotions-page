<template>
	<Picture
		src="group-12"
		:class="$style.logo" />
</template>

<script>

import Picture from '~/components/Picture'
export default {
	components: {
		Picture
	}
}
</script>

<style lang="scss" module>
.logo {
	height: 100%;
	width: initial;
}
</style>
