<template>
	<div :class="$style.container">
		<div
			class="f-between"
			:class="[$style.section, $style.appSection]"
		>
			<div>
				<h1>{{ $t('page-title') }}</h1>
				<p>{{ $t('app-description') }}</p>
				<DownloadApp :class="$style.downloadApp" />
			</div>
			<Picture
				:class="$style.appImage"
				src="group-9" />
		</div>

		<div
			class="f-between"
			:class="[$style.section, $style.benefitsSection]"
		>
			<BenefitBox
				:title="$t('benefits-title')"
				:description="$t('benefits-description')"
			/>
			<BenefitBox
				:title="$t('benefits-title')"
				:description="$t('benefits-description')"
				type="clock"
			/>
			<BenefitBox
				:title="$t('benefits-title')"
				:description="$t('benefits-description')"
				type="bell"
			/>
		</div>

		<div
			class="f-col-between"
			:class="[$style.section, $style.videoSection]"
		>
			<h2>{{ $t('promotional-title') }}</h2>
			<p>{{ $t('promotional-description') }}</p>
			<iframe
				width="100%"
				height="450"
				style="border: none"
				src="https://www.youtube.com/embed/18rXCx8jSeg">
			</iframe>
		</div>
		<div
			class="f-col-between"
			:class="[$style.section, $style.spotlightSection]"
		>
			<h2>{{ $t('spotlight-title') }}</h2>
			<div
				class="f-between"
				:class="$style.sectionBody">
				<div :class="$style.corporations">
					<div :class="$style.corporation">
						<span>{{ $t('spotlight-sub-title') }}</span>
						<p>{{ $t('spotlight-description') }}</p>
					</div>
					<div :class="$style.corporation">
						<span>{{ $t('spotlight-sub-title') }}</span>
						<p>{{ $t('spotlight-description') }}</p>
					</div>
					<div :class="$style.corporation">
						<span>{{ $t('spotlight-sub-title') }}</span>
						<p>{{ $t('spotlight-description') }}</p>
					</div>
				</div>
				<div :class="$style.corporationsLogo">
					<CorporateLogo
						v-for="(corporate, index) in corporates"
						:key="index"
						:type="corporate"
					/>
				</div>
			</div>
		</div>
		<div
			class="f-between"
			:class="[$style.section, $style.appSection]"
		>
			<Picture
				:class="$style.appImage"
				src="group-9" />
			<div>
				<h1>{{ $t('page-title') }}</h1>
				<p>{{ $t('app-description') }}</p>
				<DownloadApp :class="$style.downloadApp" />
			</div>
		</div>
		<div :class="[$style.section, $style.mostAccessedSection]">
		</div>
	</div>
</template>

<script>
import Picture from '~/components/Picture'
import DownloadApp from '~/components/DownloadApp'
import BenefitBox from '~/components/BenefitBox'
import CorporateLogo from '~/components/CorporateLogo'

export default {
	components: {
		Picture,
		DownloadApp,
		BenefitBox,
		CorporateLogo
	},
	data () {
		return {
			corporates: [
				'primary',
				'light',
				'light',
				'light',
				'light',
				'danger',
				'light',
				'light',
				'light',
				'light',
				'info',
				'light',
				'light',
				'light',
				'light	',
				'warning'
			]
		}
	}
}
</script>

<style lang="scss" module>
.container {
	height: 100%;
}

.section {
	padding: 80px 110px;

	&.appSection {

		h1 {
			font-size: $font-xl;
		}

		p {
			font-size: $font-md;
			max-width: 550px;
		}

		.downloadApp {
			margin: 40px 100px 0 0;

			img {
				max-width: 150px;
			}
		}
	}

	&.benefitsSection {
		background-color: $green2-light;
	}

	&.videoSection {
		padding: 100px 240px;

		p {
			text-align: center;
			margin: 30px 0;
		}
	}

	&.spotlightSection {

		.sectionBody {
			margin-top: 40px;
		}
		[class*="f-between"] {
			width: 100%;
		}

		.corporations {
			max-width: 500px;
			width: 100%;
		}

		.corporation {
			padding: 8px 0 30px 0;
			margin-right: 30px;

			span {
				font-size: $font-md;
				margin-bottom: 8px;
				font-weight: 600;
			}

			p {
				font-size: $font-sm;
				margin-top: 8px;
			}
		}

		.corporationsLogo {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			width: 500px;

			[class*="CorporationLogo"] {
					margin: 12px;
				}
		}
	}
}
.appImage {
	max-width: 400px;
}
</style>
