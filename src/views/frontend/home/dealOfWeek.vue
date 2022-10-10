<template>
	<section class="dealofweek">
		<!-- Deal Of the Week Start -->
		<img class="shape" src="assets/images/shape-pattern.png" alt="" />
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title">
						<h2 class="title">Deal Of the Week</h2>
						<p>
							Prepared is me marianne pleasure likewise debating.
							Wonder an unable except better stairs do ye admire.
							His secure called esteem praise.
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-10">
					<div class="deal-slider-area" data-aos="fade-up">
						<div class="deal-slider">
							<div class="item">
								<div class="content">
									<div class="row">
										<div class="col-lg-6">
											<div class="left-area">
												<img
													src="assets/images/w1.png"
													alt=""
												/>
											</div>
										</div>
										<div class="col-lg-6 d-flex">
											<div class="right-area">
												<ul class="stars">
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
												</ul>
												<h4 class="name">
													Smart Watch (blue)
												</h4>
												<p class="description">
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Magnam illo reiciendis
													saepe molestias veritatis!
												</p>
												<div class="price">
													<p>
														<span>$99</span>
														<del>$250</del>
													</p>
												</div>
												<div class="deal-counter">
													<div
														data-countdown="2022/12/09"
													></div>
												</div>
												<div class="links">
													<a
														href="#"
														class="mybtn3 mybtn-bg"
														><span>Buy Now</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="content">
									<div class="row">
										<div class="col-lg-6">
											<div class="left-area">
												<img
													src="assets/images/w3.png"
													alt=""
												/>
											</div>
										</div>
										<div class="col-lg-6 d-flex">
											<div class="right-area">
												<ul class="stars">
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
													<li>
														<i
															class="fas fa-star"
														></i>
													</li>
												</ul>
												<h4 class="name">
													Smart Watch (gray)
												</h4>
												<p class="description">
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Magnam illo reiciendis
													saepe molestias veritatis!
												</p>
												<div class="price">
													<p>
														<span>$99</span>
														<del>$250</del>
													</p>
												</div>
												<div class="deal-counter">
													<div
														data-countdown="2022/12/09"
													></div>
												</div>
												<div class="links">
													<a
														href="#"
														class="mybtn3 mybtn-bg"
														><span>Buy Now</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
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
		setTimeout(() => {
			this.init_jq();
		}, 100);
	},

	methods: {
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
