<template>
	<section class="dealofweek" id="how-course-will-run">
		<!-- Deal Of the Week Start -->
		<img class="shape" src="assets/images/shape-pattern.png" alt="" />
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title">
						<h2 class="title font-bangla">কোর্সটি কিভাবে চলবে</h2>
						<p class="font-bangla-p">
							যেভাবে আমরা আপনাকে একজন দক্ষ প্রোগ্রামার হয়ে উঠতে
							সাহায্য করতে পারি
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-10">
					<div
						class="deal-slider-area course_run_list"
						data-aos="fade-up"
					>
						<div
							class="item"
							v-for="item in learning_terms_list()"
							:key="item.no"
						>
							<div class="no font-bangla">{{ item.no }}</div>
							<div class="description font-bangla-p">
								{{ item.description }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Deal Of the Week Start -->
	</section>
</template>

<script>
export default {
	created: function () {
		// setTimeout(() => {
		// 	this.init_jq();
		// }, 100);
	},

	methods: {
		learning_terms_list: function () {
			return [
				{
					no: "১",
					description: `
						প্রতি সপ্তাহে তিনটি করে মডিউল রিলিজ দেয়া হবে এবং প্রতিটি মডিউলে 10-12 টি প্রি-রেকোর্ডেড ভিডিও 
						থাকবে যেন আপনারা ধাপে ধাপে একটার পর একটা টপিক শিখতে পারেন। প্রতিটি মডিউল শেষে থাকছে কুইজ, হোমওয়ার্ক ও
						প্রতি সপ্তাহ শেষে থাকবে একটি করে এসাইনমেন্ট। প্রতি শনি, সোম ও বুধবার 
						রাত ১০.০০ এর সময় (বাংলাদেশ সময়) একটা মডিউল রিলিজ দেয়া হবে।
					`,
				},
				{
					no: "২",
					description: `
						কোথাও না বুঝলে বা আটকে গেলে। আমাদের সাপোর্ট গ্রুপ এ প্রশ্ন করতে পারবেন। 
						প্রয়োজনে গুগল মিটে / any desk এ সমাধান করার চেষ্টা করা হবে।
					`,
				},
				{
					no: "৩",
					description: `
						তবে শুধু ভিডিও দেখে গেলে কাজ হবে না। ভিডিও এর কোন টপিক বুঝতে না 
						পারলে গুগল বা ইউটিউবে সার্চ দিয়ে আরো অন্য টিউটোরিয়াল দেখতে হবে।
					`,
				},
				{
					no: "৪",
					description: `
						যারা নির্দিষ্ট সময়ের মধ্যে ডেডিকেটেড ভাবে লেগে থেকে কোর্স শেষ করবে, 
						প্রজেক্ট ও এসাইনমেন্ট সঠিক সময়ে সাবমিট করবে তাদের থেকে জব প্লেসমেন্ট 
						এর জন্য সিলেক্ট করা হবে।
					`,
				},
				{
					no: "৫",
					description: `
						আমাদের কোর্স প্রি-রেকর্ডেড (ভিডিও আগে থেকে রেকর্ড করা থাকবে)। 
						অর্থাৎ লাইভ ক্লাস হবে না। তাই রাত ১০.০০ এর পরে যেকোন সময়ের মধ্যে ভিডিও দেখে নিলেই চলবে। 
						প্রতিদিন গড়ে ৬ থেকে ৮ ঘন্টা সময় দিতে হবে। মিনিমাম ৪ থেকে ৬ ঘন্টা সময় দিতেই হবে।
					`,
				},
			];
		},
		init_jq: function () {
			// Product deal countdown
			let $ = window.$;

			let items = $(".deal-slider .item");
			$(".deal-slider").html(items);

			// deal_slider
			var $deal_slider = $(".deal-slider");
			$deal_slider.owlCarousel({
				loop: true,
				nav: false,
				autoplay: false,
				dots: false,
				margin: 30,
				autoplayTimeout: 3000,
				smartSpeed: 1200,
				responsive: {
					0: {
						items: 1,
					},
					576: {
						items: 1,
					},
					950: {
						items: 1,
					},
					960: {
						items: 1,
					},
					1200: {
						items: 1,
					},
				},
			});

			$("[data-countdown]").each(function () {
				var $this = $(this),
					finalDate = $(this).data("countdown");
				$this.countdown(finalDate, function (event) {
					$this.html(
						event.strftime(
							"<span>%D <small>Days</small></span> <span>%H <small>Hrs</small></span>  <span>%M <small>Min</small></span> <span>%S <small>Sec</small></span>"
						)
					);
				});
			});
		},
	},
};
</script>

<style></style>
