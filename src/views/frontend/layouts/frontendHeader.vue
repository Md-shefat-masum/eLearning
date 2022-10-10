<template>
	<!-- Navebar Area start -->
	<header class="navigation">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 p-0">
					<nav class="navbar navbar-expand-lg navbar-light">
						<router-link class="navbar-brand" to="/">
							<img src="assets/images/tp-logo.png" alt="" />
						</router-link>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#mainmenu"
							aria-controls="mainmenu"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="mainmenu">
							<ul class="navbar-nav ml-auto">
								<li class="nav-item active">
									<router-link
										class="nav-link font-bangla-nav"
										to="/"
									>
										হোম
									</router-link>
								</li>
								<li class="nav-item">
									<router-link
										class="nav-link font-bangla-nav"
										to="/about"
									>
										ফিচার্স
									</router-link>
								</li>
								<li class="nav-item">
									<a class="nav-link font-bangla-nav" href="#about">
										মডিউলস
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link font-bangla-nav"
										href="#feature"
									>
										প্রজেক্টস
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link font-bangla-nav"
										href="#pricing"
									>
										কিভাবে চলবে
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link font-bangla-nav"
										href="#testimonial-area"
									>
										কেন করবেন
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link font-bangla-nav"
										href="#faq"
									>
										প্রশ্ন
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link font-bangla-nav"
										href="#contact"
									>
										সাপোর্ট
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link font-bangla-nav nav-link-login"
										href="#contact"
									>
										লগইন
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</header>
	<!-- Navebar Area End -->
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
			// Navbar collapse on click
			$(".nav-link").on("click", function () {
				$(".navbar-collapse").collapse("hide");
			});
		},
	},
};
</script>

<style></style>
