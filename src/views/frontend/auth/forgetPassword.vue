<template>
	<section class="auth">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6 col-md-10">
					<div class="sign-form">
						<div class="heading">
							<h1 class="font-bangla bangla-heading font-bold"> পাসওয়ার্ড ভুলে গেছেন? </h1>
							<p class="font-bangla-p bangla-pg">
								আপনার ইমেইল এড্রেস দিয়ে রিসেট করে নিন
							</p>
						</div>
						<form class="form-group mb-0" @submit.prevent="forget_password($event.target)" action="#">
							<div class="form-group">
								<label for="" class="font-bangla"> আপনার ইমেইল এড্রেস <span class="text-danger"> * </span> </label>
								<input
									class="form-control bg-transparent text-light"
									type="email"
									name="email"
									placeholder="user@domain.com"
								/>
							</div>
							
							<button class="bigbtn font-bangla" type="submit">
								সাবমিট করুন
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
					<img src="assets/images/login.jpeg" alt="">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions } from "vuex";
export default {
	methods: {
		...mapActions(["forget_password",]),
	},
};
</script>

<style></style>
