<template>
	<div :class="containerClasses">
		<div
			class="f-between"
			:class="[$style.section, $style.appSection]"
		>
			<div>
				<h1>{{ $t('page-title') }}</h1>
				<p>{{ $t('app-description') }}</p>
				<DownloadApp :size="size.downloadApp" />
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
				:size="size.benefit"
			/>
			<BenefitBox
				:title="$t('benefits-title')"
				:description="$t('benefits-description')"
				type="clock"
				:size="size.benefit"
			/>
			<BenefitBox
				:title="$t('benefits-title')"
				:description="$t('benefits-description')"
				type="bell"
				:size="size.benefit"
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
			<Carousel @onNext="loadProducts()">
				<ProductAccess
					v-for="(product, index) in products"
					:key="index"
					v-bind="product"
					:store="getStoreName(product.storeId)"
				/>
			</Carousel>
		</div>
	</div>
</template>

<script>
import { list as listStores } from '~/api/stores'
import { list as listProducts } from '~/api/products'

import Picture from '~/components/Picture'
import DownloadApp from '~/components/DownloadApp'
import BenefitBox from '~/components/BenefitBox'
import CorporateLogo from '~/components/CorporateLogo'
import ProductAccess from '~/components/ProductAccess'
import Carousel from '~/components/Carousel'

export default {
	components: {
		Picture,
		DownloadApp,
		BenefitBox,
		CorporateLogo,
		ProductAccess,
		Carousel
	},
	async asyncData () {
		const idToStore = {}
		const stores = await listStores()
		stores.forEach((store) => { idToStore[store._id] = store })
		const products = await listProducts({ limit: 10, offset: 0 })
		return {
			stores,
			idToStore,
			products
		}
	},
	data () {
		return {
			baseCorporates: [
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
			req: {
				limit: 6,
				offset: 0,
				loaded: true,
				allLoaded: false
			}
		}
	},
	computed: {
		containerClasses () {
			return [this.$style.container, this.$style[this.$mq]]
		},
		size () {
			return {
				downloadApp: this.$mq === 'mobile' ? 'lg' : 'lg',
				benefit: this.$mq === 'mobile' ? 'fill' : 'fixed'
			}
		},
		corporates () {
			if (this.$mq === 'mobile') {
				return this.baseCorporates.filter((corporation, index) => (index + 1) % 4 !== 0 && index < 12)
			}
			return this.baseCorporates
		}
	},
	methods: {
		getStoreName (storeId) {
			if (!storeId) {
				return ''
			} else {
				const store = this.idToStore[storeId]
				return store.name
			}
		},
		async loadProducts () {
			if (!this.req.allLoaded) {
				this.loaded = false
				this.req.offset += 10
				const newProducts = await listProducts(this.req)
				this.products = [...this.products, ...newProducts]
				this.req.loaded = true
				this.req.allLoaded = !newProducts.length
			}
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
			display: grid;
			grid-template-columns: 85px 85px 85px 85px;
			grid-gap: 12px;
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

			&:hover {
				color: $green-smooth-dark;
			}
		}
	}

	.appImage {
		max-width: 370px;
	}
}

.tablet {
	.section {
		padding: 40px;
	}

	.appSection {
		padding: 120px 40px 60px;
	}
	.appImage {
		max-width: 270px;
	}
}

.mobile {
	h1 {
		font-size: $font-lg;
	}

	h2 {
		font-size: $font-lg;
	}

	.section {
		padding: 20px;
	}

	.appSection {
		flex-wrap: wrap;
		padding: 40px 20px;

		h1 {
			font-size: $font-lg;
			margin-top: 22px;
		}

		[class*="DownloadApp"] {
			margin: 18px 0 0 0;
			width: 100%;
		}

		.appImage {
			max-width: 90%;
			margin: 0 auto;
		}

		&:first-child {
			padding: 108px 20px;

			[class*="DownloadApp"] {
			margin: 18px 0 22px;
		}
		}
	}

	.benefitsSection {
		flex-direction: column;
		padding: 30px 20px;

		[class*="BenefitBox"] {
			margin-top: 18px;

			&:first-child {
				margin-top: 0;
			}
		}
	}

	.videoSection {
		padding: 96px 20px;
	}

	.spotlightSection {
		.sectionBody {
			flex-direction: column-reverse;
		}

		.corporationsLogo {
			grid-template-columns: 85px 85px 85px;
		}

		.corporations {
			margin-top: 20px;

			.corporation {
				display: flex;
				flex-direction: column;
				padding: 8px 0 12px;
				span, p {
					text-align: center;
				}
			}
		}
	}

	.mostAccessedSection {
		.seeAll {
			margin: 0 0 0 6px;
		}
	}
}

.mobile, .tablet {

}
</style>
