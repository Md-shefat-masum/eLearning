<template>
	<section class="testimonial-area" id="testimonial-area">
		<!-- Testimonial Area Start -->
		<img class="shape" src="assets/images/shape-pattern.png" alt="" />
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title extra">
						<h2 class="title">Our Clients Say</h2>
						<p>
							Prepared is me marianne pleasure likewise debating.
							Wonder an unable except better stairs do ye admire.
							His secure called esteem praise.
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-7">
					<div class="testimonial-img" data-aos="fade-up">
						<img
							class="img1"
							src="assets/images/testimonialimage/1.jpg"
							alt=""
						/>
						<img
							class="img2"
							src="assets/images/testimonialimage/2.jpg"
							alt=""
						/>
						<img
							class="img3"
							src="assets/images/testimonialimage/1.jpg"
							alt=""
						/>
						<img
							class="img4"
							src="assets/images/testimonialimage/2.jpg"
							alt=""
						/>
						<img
							class="img5"
							src="assets/images/testimonialimage/1.jpg"
							alt=""
						/>
						<img
							class="img6"
							src="assets/images/testimonialimage/2.jpg"
							alt=""
						/>
					</div>
					<div class="testimonial-slider" data-aos="fade-up">
						<div class="item">
							<div class="client">
								<div class="client-image">
									<img
										src="assets/images/testimonialimage/1.jpg"
										class="img-fluid"
										alt=""
									/>
								</div>
								<p class="client-say">
									Do play they miss give so up. Words to up
									style of since world. Way own uncommonly
									travelling now acceptance bed compliment
									solicitude. We leaf to snug on no need.
								</p>
								<h4 class="client-name">
									<a href="#"> Natha Roy </a>
								</h4>
								<h5 class="designation">CEO of Apple</h5>
							</div>
						</div>
						<div class="item">
							<div class="client">
								<div class="client-image">
									<img
										src="assets/images/testimonialimage/2.jpg"
										class="img-fluid"
										alt=""
									/>
								</div>
								<p class="client-say">
									Do play they miss give so up. Words to up
									style of since world. We leaf to snug on no
									need. Way own uncommonly travelling now
									acceptance bed compliment solicitude.
								</p>
								<h4 class="client-name">
									<a href="#"> Natasha li </a>
								</h4>
								<h5 class="designation">CEO of Facebook</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Testimonial Area End -->
	</section>
</template>

<script>
export default {
	created: function () {
		setTimeout(() => {
			this.init_jq();
		}, 100);
	},
	methods: {
		init_jq: function () {
			
			let $ = window.$;

			let items = $(".testimonial-slider .item");
			$(".testimonial-slider").html(items);

			// testimonial-slider
			var $testimonialSlider = $(".testimonial-slider");
			$testimonialSlider.owlCarousel({
				loop: true,
				navText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>',
				],
				nav: true,
				dots: false,
				animateOut: "fadeOut",
				animateIn: "fadeIn",
				autoplayTimeout: 6000,
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
		},
	},
};
</script>

<style></style>
