<template>
	<div :class="$style.carousel">
		<div
			ref="items"
			:class="$style.items">
			<slot>
				teste
			</slot>
		</div>
		<Picture
			:class="$style.next"
			src="seta"
			@click.native="next" />
	</div>
</template>

<script>
import Picture from '~/components/Picture'

export default {
	components: {
		Picture
	},
	props: {

	},
	data () {
		return {
			scroll: 0
		}
	},
	methods: {
		next () {
			this.scroll += 150
			if (this.$refs.items.scrollWidth - this.$refs.items.scrollLeft === this.$refs.items.clientWidth) {
				this.scroll = 0
			}

			this.$refs.items.scroll(this.scroll, 0)
			this.$emit('onNext')
		}
	}
}
</script>

<style lang="scss" module>
.carousel {
	display: flex;
	flex-direction: row;
	align-items: center;

	.items {
		display: flex;
		flex-direction: row;
		overflow: hidden;

		> * {
			margin: 0 6px;

			&:first-child {
				margin-left: 0;
			}

			&:last-child {
				margin-right: 0;
			}
		}
	}

	.next {
		width: 45px;
		margin-left: 12px;
		cursor: pointer;
	}
}
</style>
