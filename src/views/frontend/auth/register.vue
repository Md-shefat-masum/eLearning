<template>
	<section class="auth">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6 col-md-10">
					<div class="sign-form">
						<div class="heading">
							<h1 class="font-bangla bangla-heading font-bold">
								লগইন করুন
							</h1>
							<p class="font-bangla-p bangla-pg">
								লগইন তথ্য শেয়ার করা থেকে বিরত থাকুন
							</p>
						</div>
						<form
							class="form-group mb-0"
							@submit.prevent="register($event.target)"
							action="#"
						>
							<div class="form-group">
								<label for="" class="font-bangla">
									আপনার সম্পূর্ণ নাম
									<span class="text-danger"> * </span>
								</label>
								<input
									class="form-control bg-transparent text-light"
									type="text"
									name="username"
									placeholder="full name"
								/>
							</div>
							<div class="form-group">
								<label for="" class="font-bangla">
									আপনার মোবাইল নং
									<span class="text-danger"> * </span>
								</label>
								<input
									class="form-control bg-transparent text-light"
									type="text"
									name="phone"
									placeholder="+880 123****"
								/>
							</div>
							<div class="form-group">
								<label for="" class="font-bangla">
									আপনার ইমেইল এড্রেস
									<span class="text-danger"> * </span>
								</label>
								<input
									class="form-control bg-transparent text-light"
									type="email"
									name="email"
									placeholder="user@domain.com"
								/>
							</div>
							<div class="form-group">
								<label for="" class="font-bangla">
									আপনার পাসওয়ার্ড
									<span class="text-danger"> * </span>
								</label>
								<input
									class="form-control bg-transparent text-light"
									type="password"
									name="password"
									placeholder="********* "
								/>
							</div>
							<div class="custom-control custom-checkbox d-flex">
								<span class="ml-auto font-bangla">
									<router-link to="/forget-password">
										পাসওয়ার্ড ভুলে গেছেন?
									</router-link>
								</span>
							</div>
							<button class="bigbtn font-bangla" type="submit">
								রেজিষ্ট্রেশন করুন
							</button>
							<p class="reg-text text-center mb-0">
								Already have an account?
								<router-link class="font-bangla" to="/login">
									লগইন করুন
								</router-link>
							</p>
						</form>
					</div>
				</div>
				<div class="col-lg-4 d-flex align-items-center">
					<img src="assets/images/login.jpeg" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	created: function () {
		if (this.get_check_auth_status) {
			this.$router.replace("/dashboard");
		}

		setTimeout(() => {
			let $ = window.$;
			$("html")[0].scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}, 100);
	},
	watch: {
		get_check_auth_status: {
			handler: function (newV) {
				if (newV === true) {
					this.$router.replace("/");
				}
			},
		},
	},
	methods: {
		...mapActions(["register"]),
	},
	computed: {
		...mapGetters(["get_check_auth_status"]),
	},
};
</script>

<style></style>
