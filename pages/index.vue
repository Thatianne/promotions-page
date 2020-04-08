<template>
	<div :class="$style.container">
		<div
			class="f-between"
			:class="[$style.section, $style.appSection]"
		>
			<div>
				<h1>{{ $t('page-title') }}</h1>
				<p>{{ $t('app-description') }}</p>
				<DownloadApp />
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
				height="415"
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
				src="group-11" />
			<div>
				<h1>{{ $t('page-title') }}</h1>
				<p>{{ $t('app-description') }}</p>
				<DownloadApp />
			</div>
		</div>
		<div :class="[$style.section, $style.mostAccessedSection]">
			<div
				class="f-between"
				:class="$style.title">
				<h3>{{ $t('most-accessed-title') }}</h3>
				<a
					:class="$style.seeAll"
					href="#"
				>
					{{ $t('see-all') }}
				</a>
			</div>
			<Carousel>
				<ProductAccess
					v-for="(product, index) in mostAccessedProducts"
					:key="index"
					v-bind="product"
				/>
			</Carousel>
		</div>
		<Footer />
	</div>
</template>

<script>
import Picture from '~/components/Picture'
import DownloadApp from '~/components/DownloadApp'
import BenefitBox from '~/components/BenefitBox'
import CorporateLogo from '~/components/CorporateLogo'
import ProductAccess from '~/components/ProductAccess'
import Carousel from '~/components/Carousel'
import Footer from '~/components/Footer'

export default {
	components: {
		Picture,
		DownloadApp,
		BenefitBox,
		CorporateLogo,
		ProductAccess,
		Carousel,
		Footer
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
			],
			mostAccessedProducts: [
				{
					picture: 'cadeira',
					title: 'Cadeira para escritório',
					seller: 'Magazine Luíza',
					price: 650
				},
				{
					picture: 'monitor',
					title: 'Monitor DELL',
					seller: 'Lojas Americanas',
					price: 1.609
				},
				{
					picture: 'monitor',
					title: 'Monitor DELL',
					seller: 'Lojas Americanas',
					price: 1.609
				},
				{
					picture: 'monitor',
					title: 'Monitor DELL',
					seller: 'Lojas Americanas',
					price: 1.609
				},
				{
					picture: 'monitor-lg',
					title: 'Monitor LG',
					seller: 'Magazine Luíza',
					price: 1.525
				},
				{
					picture: 'monitor-lg',
					title: 'Monitor LG',
					seller: 'Magazine Luíza',
					price: 1.525
				}
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
	padding: 80px;

	&.appSection {
		// padding-top: 48px;

		h1 {
			font-size: $font-xxl;
		}

		p {
			font-size: $font-sm;
			max-width: 420px;
			margin-top: 12px
		}

		[class*="DownloadApp"] {
			margin: 40px 40px 0 0;
		}
	}

	&.benefitsSection {
		background-color: $green-whiter;
	}

	&.videoSection {
		padding: 96px 140px;

		p {
			text-align: center;
			margin: 21px 0;
			font-size: $font-sm;
		}
	}

	&.spotlightSection {

		padding-top: 0;

		.sectionBody {
			margin-top: 40px;
		}
		[class*="f-between"] {
			width: 100%;
		}

		.corporations {
			max-width: 360px;
			width: 100%;
		}

		.corporation {
			padding: 8px 0 30px 0;

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
			width: 436px;

			[class*="CorporationLogo"] {
					margin: 12px;
				}
		}
	}

	&.mostAccessedSection {
		padding: 0 55px 80px;

		.title {
			margin: 24px 0;
		}

		.seeAll {
			font-size: $font-xs;
			color: $green-smooth;
			font-weight: 500;
			margin-right: 80px;
			text-decoration: none;
		}
	}
}
.appImage {
	max-width: 370px;
}
</style>
