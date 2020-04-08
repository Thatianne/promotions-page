<template>
	<div :class="$style.footer">
		<div
			class="f-between"
			:class="$style.install"
		>
			<div :class="$style.extension">
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
				<DownloadApp size="md" />
			</div>
		</div>
		<div :class="$style.info">
			test
		</div>
	</div>
</template>

<script>
import Picture from '~/components/Picture'
import DownloadApp from '~/components/DownloadApp'

export default {
	components: {
		Picture,
		DownloadApp
	}
}
</script>

<style lang="scss" module>
.footer {

	.install {
		height: 80px;
		background-color: $green-smooth-light;
		padding: 6px 80px;

		.extension {
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 300px;

			span {
				font-size: $font-xs;
				color: $black;
			}

			[class*="Picture"] {
				width: 20px;
				margin-right: 12px;
			}
		}

		.app {
			width: 430px;

			p {
				width: 210px;
				font-size: $font-xs;
			}

			[class*="DownloadApp"] {
				width: 215px;
			}
		}
	}

	.info {
		height: 225px;
		background-color: $green;
		padding: 6px 80px;
	}

	.darkBold {
		font-size: $font-xs;
		color: $black;
		font-weight: 500;
	}
}
</style>
