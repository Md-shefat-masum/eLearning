<template>
	<section class="pricing" id="what-you-will-learn">
		<!-- Pricing Area Start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title">
						<h2 class="title font-bangla">
							কোর্সে যে টপিকগুলো শিখানো হবে
						</h2>
						<p class="font-bangla-p">
							প্রফেশনাল ওয়েবডেভেলপার হয়ে উঠতে যা কিছু লাগবে, তার
							সবটুকু এই কোর্সটিতে আপানাদেরকে শিখানো হবে।
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="what_you_will_learn_list">

						<WhatYouWillLearnItem
							:image_name="`html`"
							:title="`html`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`css`"
							:title="`css`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`github`"
							:title="`github`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`sass`"
							:title="`sass`"
						></WhatYouWillLearnItem>

						<!-- <WhatYouWillLearnItem
							:image_name="`less`"
							:title="`less`"
						></WhatYouWillLearnItem> -->

						<WhatYouWillLearnItem
							:image_name="`bootstrap`"
							:title="`bootstrap`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`js`"
							:title="`Java Script`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`jquery`"
							:title="`jQuery`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`react`"
							:title="`React JS`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`redux`"
							:title="`Redux`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`nodejs`"
							:title="`Node JS`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`expressjs`"
							:title="`Express JS`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`mongodb`"
							:title="`Mongo DB, Mongoose`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`restapi`"
							:title="`REST API`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`jest`"
							:title="`Jest`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`netlify`"
							:title="`Netlify`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`heroku`"
							:title="`Heroku`"
						></WhatYouWillLearnItem>

						<WhatYouWillLearnItem
							:image_name="`cpanel`"
							:title="`Cpanel`"
						></WhatYouWillLearnItem>

					</div>
				</div>
			</div>
		</div>
		<!-- pricing part End -->
	</section>
</template>

<script>
import WhatYouWillLearnItem from "./components/whatYouWillLearnItem.vue";
export default {
	created: function () {
		// setTimeout(() => {
		// 	this.init_jq();
		// }, 100);
	},
	methods: {
		init_jq: function () {
			// product_slider
			let $ = window.$;
			let items = $(".product-slider .item");
			$(".product-slider").html(items);
			var $product_slider = $(".product-slider");
			$product_slider.owlCarousel({
				loop: true,
				nav: true,
				navText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>',
				],
				dots: false,
				margin: 30,
				autoplay: false,
				autoplayTimeout: 8000,
				smartSpeed: 1500,
				responsive: {
					0: {
						items: 1,
					},
					576: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 3,
					},
					1200: {
						items: 4,
					},
					1920: {
						items: 4,
					},
				},
			});
		},
	},
	components: { WhatYouWillLearnItem },
};
</script>

<style></style>
