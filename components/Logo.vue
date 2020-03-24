<template>
	<img
		:src="`/img/${image}`"
		alt="Logo"
	/>
</template>

<script>
export default {
	computed: {
		image () {
			if (this.$device.isMobile) {
				return 'group-12.png'
			} else if (this.$device.isTablet) {
				return 'group-12@2x.png'
			} else {
				return 'group-12@3x.png'
			}
		}
	}
}
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
