<template>
	<!-- Hero Area Start -->
	<div id="home" class="hero-area">
		<!-- <img class="shape" src="assets/images/shape-pattern.png" alt="" /> -->
		<div class="container">
			<div class="row">
				<div class="col-lg-6 d-flex align-self-center">
					<div class="left-content">
						<div class="content">
							<h1 class="title">
								<span class="font-bangla">
									হয়ে উঠুন একজন দক্ষ
								</span>
								FULL STACK
								<span class="font-bangla"> ডেভেলপার </span>
							</h1>

							<p class="subtitle">
								<span class="font-bangla-p">
									এই কোর্সে একজন শিক্ষার্থী বেসিক
								</span>
								HTML, CSS
								<span class="font-bangla-p">
									থেকে শুরু করে
								</span>
								PSD to HTML Design, Figma to HTML, Layout to
								HTML, SCSS, LESS, Bootstrap, Java Script,
								jQuery, React JS, Redux, Node JS, Express JS,
								Mongo DB, API Development, Hosting, Testing
								<span class="font-bangla-p">
									সহ যাবতীয় সকল বিষয় সম্পর্কে জেনে একজন
									ফুলস্ট্যাক ডেভেলপার হিসেবে নিজেকে তৈরী করতে
									পারবেন বলে আমারা বিশ্বাস করি।
								</span>
							</p>
							<div class="links">
								<router-link to="/enroll" class="mybtn3 font-22 mybtn-light me-4 font-bangla font-bold">
									<span> 
										<b>কোর্সে ভর্তি হতে ফর্ম ফিলাপ করুন</b>
									</span>
								</router-link>

								<router-link v-if="get_check_auth_status === false" to="/register" class="mybtn3 font-22 mybtn-light font-bangla font-bold">
									<span>
										<b>ফ্রী কোর্স দেখতে রেজিস্ট্রেশন করুন</b>
									</span>
								</router-link>
								<router-link v-if="get_check_auth_status" to="/dashboard" class="mybtn3 mybtn-light font-22 font-bangla font-bold">
									<span>
										<b>ড্যাশবোর্ড দেখুন</b>
									</span>
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6 order-first order-lg-last">
					<div class="right-img">
						<div class="discount-circle">
							<div class="discount-circle-inner">
								<div class="price">
									20%
									<span>Off</span>
								</div>
							</div>
						</div>
						<!-- <img
							class="img-fluid img"
							src="assets/images/w4.png"
							alt=""
						/> -->
						<div class="banner_right">
							<div
								class="img1"
								style="
									background-image: url('assets/images/banner-right-1.png');
									background-size: contain;
									background-position: center;
								"
							></div>
							<div
								class="img2"
								style="
									background-image: url('assets/images/banner-right-2.png');
									background-size: contain;
									background-position: center;
								"
							></div>
							<div
								class="img3"
								style="
									background-image: url('assets/images/banner-right-3.png');
									background-size: 104%;
									background-position: center;
								"
							>
							</div>
							<div
								class="img4"
								style="
									background-image: url('assets/images/banner-right-3.png');
									background-size: 104%;
									background-position: center;
								"
							>
							</div>
							<div
								class="img5"
								style="
									background-image: url('assets/images/banner-right-4.jpg');
									background-size: 100%;
									background-position: top center;
								"
							>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Hero Area End -->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['get_check_auth_status'])
	}
};
</script>

<style>
	.me-4{
		margin-right: 40px;
	}
	.font-22{
		font-size: 22px;
	}
</style>
