<template>
	<!-- Navebar Area start -->
	<header class="navigation">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 p-0">
					<nav class="navbar navbar-expand-lg navbar-light">
						<nav-logo></nav-logo>
						<nav-toggler></nav-toggler>
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
									<backend-action-nav-link></backend-action-nav-link>
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
import { mapGetters } from "vuex";
import BackendActionNavLink from "@/views/backend/layouts/components/backendActionNavLink.vue";
import NavLogo from "@/views/shared/navLogo.vue";
import NavToggler from "../../shared/navToggler.vue";
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
    computed: {
        ...mapGetters(["get_check_auth_status",]),
    },
    components: { BackendActionNavLink, NavLogo, NavToggler }
};
</script>

<style></style>
