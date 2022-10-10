<template>
	<section class="pricing" id="pricing">
		<!-- Pricing Area Start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title">
						<h2 class="title">Our Awesome Products</h2>
						<p>
							Prepared is me marianne pleasure likewise debating.
							Wonder an unable except better stairs do ye admire.
							His secure called esteem praise.
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="product-slider" data-aos="fade-up">
						<div class="item">
							<div class="single-product">
								<div class="img">
									<img src="assets/images/w1.png" alt="" />

									<div class="links">
										<a href="#" class="mybtn3 mybtn-bg"
											><span>Buy Now</span>
										</a>
									</div>
								</div>
								<div class="content">
									<ul class="stars">
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star-half"></i>
										</li>
									</ul>
									<div class="price">
										<p class="new-price">$135</p>
										<small>
											<del> $193 </del>
										</small>
									</div>

									<h4 class="title">Prolab Blue</h4>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="single-product">
								<div class="img">
									<img src="assets/images/w2.png" alt="" />

									<div class="links">
										<a href="#" class="mybtn3 mybtn-bg"
											><span>Buy Now</span>
										</a>
									</div>
								</div>
								<div class="content">
									<ul class="stars">
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star-half"></i>
										</li>
									</ul>
									<div class="price">
										<p class="new-price">$135</p>
										<small>
											<del> $193 </del>
										</small>
									</div>

									<h4 class="title">Prolab Blue</h4>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="single-product">
								<div class="img">
									<img src="assets/images/w3.png" alt="" />

									<div class="links">
										<a href="#" class="mybtn3 mybtn-bg"
											><span>Buy Now</span>
										</a>
									</div>
								</div>
								<div class="content">
									<ul class="stars">
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star-half"></i>
										</li>
									</ul>
									<div class="price">
										<p class="new-price">$135</p>
										<small>
											<del> $193 </del>
										</small>
									</div>

									<h4 class="title">Prolab Blue</h4>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="single-product">
								<div class="img">
									<img src="assets/images/w4.png" alt="" />

									<div class="links">
										<a href="#" class="mybtn3 mybtn-bg"
											><span>Buy Now</span>
										</a>
									</div>
								</div>
								<div class="content">
									<ul class="stars">
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star"></i>
										</li>
										<li>
											<i class="fas fa-star-half"></i>
										</li>
									</ul>
									<div class="price">
										<p class="new-price">$135</p>
										<small>
											<del> $193 </del>
										</small>
									</div>

									<h4 class="title">Prolab Blue</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- pricing part End -->
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
};
</script>

<style></style>
