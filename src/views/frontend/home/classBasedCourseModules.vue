<template>
	<section class="about" id="features">
		<!-- About Area Start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title extra">
						<h2 class="title font-bangla">
							স্টাডি প্লান
						</h2>
						<p class="font-bangla-nav">পুরো কোর্সটিকে আমরা {{webDesignModules.length}} টি মডিউল এ ভাগ করেছি, প্রতিটি মডিউলের জন্য একটি করে লাইভ ক্লাস থাকবে</p>
					</div>
				</div>
			</div>
			<div class="row d-flex align-items-center">
				<div data-aos="fade-right" class="col-12 col-lg-6 segment_left">
					<img src="/assets/images/web-design-2.png" alt="">
				</div>
				<div data-aos="fade-left" class="col-12 col-lg-6 segment_right">
					<div class="num_shape">
						<img src="/assets/images/shape-1.png" alt="">
						<span class="shape">১</span>
					</div>
					<h3 class="section_heading">ওয়েব ডিজাইন মডিউলস</h3>
					<div class="modules">

					</div>
				</div>
			</div>

			<div class="row d-flex align-items-center">
				<div data-aos="fade-right"  class="col-12 col-lg-6 segment_right">
					<div class="num_shape">
						<img src="/assets/images/shape-1.png" alt="">
						<span class="shape">২</span>
					</div>
					<h3 class="section_heading">ব্যাকএন্ড ডেভলপমেন্ট</h3>
					<p class="section_description">
						- শুরুতেই আমরা JavaScript এর ES6+ Features সহ আডভান্ড টপিক গুলো শিখবো, তারপর সরাসরি NodeJS এ জাম্প করবো, এবং Core বিষয় গুলো কম্পিটলি বুঝার পর শুরু করবো NodeJS এর ফ্রেমওয়ার্ক ExpressJS, এবং ডেটাবেজ হিসাবে MongoDB, সাথে Mongoose. শুধু একটি মাত্র Non-Relational Database শিখেই জব ফিল্ডে এগিয়ে থাকা কষ্টকর তাই আমরা আরো একটি Relational Detabase, MySQL শিখবো। 
						<br>
						- তারপর Tamplate Engine ejs শিখে ডেভেলপ করবো আমাদের ১ম ফুল স্টাক প্রজেক্ট। তারপর, WebSocket শিখে বানিয়ে ফেলবো একদম Messenger এর মতো RealTime Messaging App, সাথে WebRTC দিয়ে যুক্ত করবো ভিডিও ও অডিও কলিং ফিচার।
						<br>
						<br>
						- ব্যাকএন্ডে আমাদের স্কিল আরেক ধাপ এগিয়ে নিতে RESTAPI, GraphQL,PugJS, Redis সহ আরো কিছু আডভান্সড Tools and Technology শিখে ফেলবো। এবং Payment Gateway হিসেবে থাকবে Stripe ও PayPal 
				<br>
				- আমাদের কোর্সের এ পর্যন্ত এসে একজন ব্যাকএন্ড ডেভেলপার হিসাবে ক্যারিয়ার শুরু করতে পারবেন।
				তবে ফুলস্টাক ডেভলপার হতে হলে আপনাকে আমাদের কোর্সের সর্বশেষ সেগমেন্ট, ফ্রন্টএন্ড ডেভলপমেন্ট কম্পিলিট করতে হবে।
					</p>
				</div>

				<div data-aos="fade-left"  class="col-12 col-lg-6 segment_left">
					<img src="/assets/images/backend.png" alt="">
				</div>

			</div>

			<div class="row d-flex frontend align-items-center">
				<div data-aos="fade-right"  class="col-12 col-lg-6 segment_left">
					<img src="/assets/images/front-end.png" alt="">
				</div>
				<div data-aos="fade-left"  class="col-12 col-lg-6 segment_right">
					<div class="num_shape">
						<img src="/assets/images/shape-1.png" alt="">
						<span class="shape">৩</span>
					</div>
					<h3 class="section_heading">ফ্রোন্টএন্ড ডেভলপমেন্ট</h3>
					<p class="section_description">
						- ReactJS এর Core বিষয় গুলো কাভার করার পর, Redux, React-Redux, এবং Redux-toolkit দিয়ে আমরা ফ্রন্টএন্ড ডেভলপমেন্ট শুরু করবো, এছাড়া থাকছে NextJS, Prisma এবং TypeScript, NestJS এর মতো ফুলস্টাক ফ্রেমওয়ার্ক্স।
						<br>
						<br>
						- এবার এত দিন ধরে যা কিছু শিখেছি তা প্রাকটিকালি ইম্লিমেন্ট করার জন্য সব কিছুর সমন্বয়ে আমরা তৈরী করবো ফেসবুক এবং দারাজের মত ফুল-স্ট্যাক ওয়েবসাইটসহ আরো প্রায় ১০টি এক্সাইটিং প্রজেক্ট।

					<br>
					<br>
					এ পর্যন্ত যারা লেগে থাকবে তাদের জন্য বোনাস হিসেবে থাকবে  Linux fundamental, AWS, Google Cloud, Firebase, CPanel, Docker, Code Testing, CI/CD, Project Deployment সহ আরো অনেক কিছু
				<br>
				- এ পর্যায়ে আপনি একজন ফুল-স্ট্যাক ডেভেলপার হিসেবে ক্যারিয়ার শুরু করতে পারবেন।

					</p>
				</div>
			</div>

			
		</div>
		<!-- About Area End -->
	</section>
</template>

<script>
import webDesignModules from "./webDesignModules";
const calculateCourseModules = ()=>{
	// let totalModules;
	const moduleArray = webDesignModules.map(milestone=> milestone.modules);
	const modules = moduleArray.map(module=> module)
	console.log(modules)
	
}
export default {
	data: function () {
		return {
			webDesignModules,
			totalModules: calculateCourseModules()
		};
	},
};
</script>

<style></style>
