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
									<a
										class="nav-link font-bangla-nav"
										href="#modules"
									>
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
								<li
									v-if="!get_check_auth_status"
									class="nav-item"
								>
									<router-link
										class="nav-link font-bangla-nav nav-link-login"
										to="/login"
									>
										লগইন
									</router-link>
								</li>
								<li
									v-if="get_check_auth_status"
									class="nav-item"
								>
									<div class="nav_dashboard_link">
										<router-link
											class="nav-link"
											to="/dashboard"
											>Dashboard</router-link
										>
										<div class="profile_links">
											<div class="profile_image">
												<img
													:src="user.photo"
													alt="user.photo"
												/>
											</div>
											<div class="drop_down_menu">
												<div class="top">
													<img
														:src="user.photo"
														alt="user.photo"
													/>
													<h2>{{user.username}}</h2>
													<h3>
														student ID: web-{{user.slug}}
													</h3>
												</div>
												<div class="bottom">
													<ul>
														<li>
															<a href="#">
																<i
																	class="fa fa-user-circle"
																>
																</i>
																Profile
															</a>
														</li>
														<li>
															<a href="#">
																<i
																	class="fa fa-tachometer-alt"
																>
																</i>
																Dashboard
															</a>
														</li>
														<li>
															<a @click.prevent="logout" href="#">
																<i
																	class="fa fa-sign-out-alt"
																>
																</i>
																Logout
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
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
import { mapGetters, mapMutations } from "vuex";
export default {
	created: function () {
		setTimeout(() => {
			this.init_jq();
		}, 100);
	},
	methods: {
		...mapMutations(['set_logout']),
		logout: function(){
			if(window.confirm('sure want to logout?')){
				this.set_logout();
			}
		},
		init_jq: function () {
			let $ = window.$;
			// Navbar collapse on click
			$(".nav-link").on("click", function () {
				$(".navbar-collapse").collapse("hide");
			});
		},
	},
	computed: {
		...mapGetters(["get_check_auth_status","get_auth_info","get_profile_photo_url"]),
		user: function(){
			return {
				...this.get_auth_info,
				photo: this.get_profile_photo_url,
			};
		}
	},
};
</script>

<style></style>
