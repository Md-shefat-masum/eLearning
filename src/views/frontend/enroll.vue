<template>
	<section class="auth">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="sign-form">
						<div class="heading">
							<h1 class="font-bangla bangla-heading font-bold">
								এনরোলমেন্ট ফর্ম 
							</h1>
							<p class="font-bangla-p bangla-pg">
								ফর্ম ফিলাফের পর আমাদের সাপোর্ট টিম আপনার সাথে যোগাযোগ করবেন
							</p>
						</div>
						<form
							class="form-group mb-0"
							@submit.prevent="enroll_registration($event.target)"
							action="#"
						>
							<div class="form-group">
								<label for="" class="font-bangla">
									আপনার সম্পূর্ণ নাম লিখুন
									<span class="text-danger"> * </span>
								</label>
								<input
									class="form-control bg-transparent text-light"
									type="text"
									name="full_name"
									placeholder="full name"
								/>
							</div>
							<div class="form-group">
								<label for="" class="font-bangla">
									Gender <span class="text-danger"> * </span>
								</label>
								<br>
								<label for="male">
									<input id="male" checked type="radio" name="gender" value="male">
									Male
								</label>
								&nbsp; &nbsp;
								<label for="female">
									<input id="female" type="radio" name="gender" value="female">
									Female
								</label>
							</div>
							<div class="form-group">
								<label for="" class="font-bangla">
									আপনার ফোন নাম্বার
									<span class="text-danger"> * </span>
								</label>
								<input
									class="form-control bg-transparent text-light"
									type="text"
									name="phone"
									placeholder="880 123*****"
								/>
							</div>
							<div class="form-group">
								<label for="" class="font-bangla">
									আপনার ঠিকানা
									<span class="text-danger"> * </span>
								</label>
								<textarea
									class="form-control bg-transparent text-light"
									name="address"
								></textarea>
							</div>
							<div class="form-group d-none">
								<label for="" class="font-bangla">
									কোর্সের ধরণ <span class="text-danger"> * </span>
								</label>
								<br>
								<label for="pre_recorded">
									<input id="pre_recorded"  type="radio" name="course_type" value="pre-recorded">
									Pre recorded
								</label>
								&nbsp; &nbsp;
								<label for="live_course">
									<input id="live_course" checked type="radio" name="course_type" value="live-course">
									Live course
								</label>
							</div>
							<button class="bigbtn font-bangla" type="submit">
								সাবমিট করুন
							</button>
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
import axios from 'axios';
export default {
	methods: {
		enroll_registration: function(form){
			let form_data = new FormData(form);
			axios.post('/enroll-registration',form_data)
				.then(res=>{
					console.log(res.data);
					window.s_alert('success','Thank you for your interest in enrolling. Our team will get back to you soon.');
					form.reset();
				})
		}
	},
	computed: {
	},
};
</script>

<style></style>
