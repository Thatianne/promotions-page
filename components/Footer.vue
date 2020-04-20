<template>
	<footer :class="classes">
		<div
			class="f-between"
			:class="$style.install"
		>
			<div
				v-if="$mq !== 'mobile'"
				:class="$style.extension"
			>
				<Picture src="chrome" />
				<div>
					<span :class="$style.darkBold">{{ $t('install-extension-title') }}</span>
					<span>{{ $t('install-extension-description') }}</span>
				</div>
			</div>
			<div
				:class="$style.app"
				class="f-between">
				<p>
					<strong :class="$style.darkBold">{{ $t('download-app-first') }}</strong> {{ $t('download-app-second') }}
				</p>
				<DownloadApp :size="size.app" />
			</div>
		</div>
		<div
			:class="$style.info"
			class="f-col-between"
		>
			<div
				class="f-between"
				style="width: 100%"
			>
				<section
					v-for="(groupOption, index) in groupOptions"
					:key="index"
				>
					<span :class="$style.whiteBold">{{ groupOption.title }}</span>
					<nav :class="$style.navigator">
						<a
							v-for="(option, indexOp) in groupOption.options"
							:key="indexOp"
							:href="option.link"
							:class="$style.link"
						>
							{{ option.text }}
						</a>
					</nav>
				</section>
				<section>
					<span :class="$style.whiteBold">{{ $t('social') }}</span>
					<div
						:class="$style.socialLogos"
						class="f-between"
					>
						<Picture src="path" />
						<Picture src="path_2" />
						<Picture src="combined-shape" />
						<Picture src="shape" />
					</div>
				</section>
			</div>
			<p :class="$style.stores">
				{{ $t('stores') }}
				<strong>{{ $t('brand-not-listed') }}</strong>
			</p>
		</div>
	</footer>
</template>

<script>
import Picture from '~/components/Picture'
import DownloadApp from '~/components/DownloadApp'

export default {
	components: {
		Picture,
		DownloadApp
	},
	data () {
		return {
			groupOptions: [
				{
					title: this.$t('about'),
					options: [
						{ text: this.$t('who-we-are'), link: '#' },
						{ text: this.$t('press'), link: '#' },
						{ text: this.$t('work-with-us'), link: '#' },
						{ text: this.$t('privacy-policy'), link: '#' }
					]
				},
				{
					title: this.$t('highlight'),
					options: [
						{ text: this.$t('black-friday'), link: '#' },
						{ text: this.$t('black-night'), link: '#' },
						{ text: this.$t('fathers-day'), link: '#' },
						{ text: this.$t('valentines-day'), link: '#' }
					]
				},
				{
					title: this.$t('contact'),
					options: [
						{ text: this.$t('talk-with-us'), link: '#' },
						{ text: this.$t('partnership'), link: '#' },
						{ text: this.$t('questions'), link: '#' }
					]
				}
			]
		}
	},
	computed: {
		classes () {
			return [this.$style.footer, this.$style[this.$mq]]
		},
		size () {
			return {
				app: this.$mq === 'mobile' ? 'lg' : 'md'
			}
		}
	}
}
</script>

<style lang="scss" module>
.footer {

	.install {
		background-color: $green-smooth-light;
		padding: 22px 80px;

		.extension {
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 280px;

			span {
				font-size: $font-xxs;
				color: $black;
			}

			[class*="Picture"] {
				width: 20px;
				margin-right: 12px;
			}
		}

		.app {
			width: 455px;
			margin: 6px 0;

			p {
				width: 210px;
				font-size: $font-xxs;
			}

			[class*="DownloadApp"] {
				width: 242px;
			}
		}
	}

	.info {
		background-color: $green;
		padding: 28px 80px 12px;

		.navigator {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			margin-top: 12px;

			.link {
				font-size: $font-xxs;
				color: $white;
				text-decoration: none;
				line-height: 22px;

				&:hover {
					color: $green-whiter;
				}
			}
		}

		section {
			height: 100%;
		}

		.socialLogos {
			width: 200px;
			margin-top: 35px;

			[class*="Picture"] {
				height: 25px;
			}
		}
	}

	.stores {
		font-size: 11px;
		color: $white;
		line-height: 16px;
		margin-top: 12px;

		strong {
			color: $white;
		}
	}

	.darkBold {
		font-size: $font-xxs;
		color: $black;
		font-weight: 500;
	}
	.whiteBold {
		font-size: $font-xs;
		color: $white;
		font-weight: 500;
	}

	&.mobile {
		.install {
			padding: 20px;
		}

		.app {
			flex-direction: column;

			[class*="DownloadApp"] {
				margin-top: 12px;
				width: 100%;
			}

			p, strong {
				width: auto;
				font-size: $font-sm;
			}
		}

		.info {
			padding: 20px;

			> div {
				flex-direction: column;
				align-items: flex-start;
			}

			section {
				margin-bottom: 22px;
			}

			.link {
				font-size: $font-xs;
			}
		}

		.whiteBold {
			font-size: $font-sm;
		}

		.stores {
			font-size: $font-xs;
		}
	}
}
</style>
