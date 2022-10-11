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
									<a
										class="nav-link font-bangla-nav"
										href="/#home"
									>
										হোম
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link font-bangla-nav"
										href="#features"
									>
										ফিচার্স
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link font-bangla-nav" href="#modules">
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
										href="#how-course-will-run"
									>
										কিভাবে চলবে
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link font-bangla-nav"
										href="#what-you-will-learn"
									>
										কি কি শিখবেন
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
