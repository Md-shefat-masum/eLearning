<template>
	<section id="faq" class="faq">
		<!-- Partner Area Start -->
		<div class="container">
			<div class="section-title extra">
				<h2 class="title font-bangla">
					কোর্স সম্পর্কিত সাধারণ জিজ্ঞাসা
				</h2>
				<p class="font-bangla-p">
					আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি।
					আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার
					অনুরোধ থাকলো।
				</p>
			</div>
			<div class="row">
				<div class="col-lg-6">
					<div
						class="panel-group accordion"
						id="accordion-1"
						data-aos="fade-right"
					>
						<AccordionItem
							v-for="(item,index) in questions()"
							:key="index"
							:id="`a${index}`"
							:title="item.title"
							:content="item.content"
						></AccordionItem>

					</div>
				</div>
				<div class="col-lg-6 d-flex">
					<div class="faq-img" data-aos="fade-left">
						<img src="assets/images/faq.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<!-- Partner Area End -->
	</section>
</template>

<script>
import AccordionItem from "./components/accordionItem.vue";
export default {
	components: { AccordionItem },
	methods: {
		questions: function () {
			return [
				{
					title: `এই কোর্স কাদের জন্য?`,
					content: `
						যারা ওয়েব ডেভেলপার হতে চায়। যারা একদম শূন্য থেকে 
						শুরু করে শেষ পর্যন্ত ওয়েব ডেভেলপমেন্ট শিখে তারপর 
						ওয়েব ডেভেলপার হিসেবে কোন সফটওয়্যার কোম্পানিতে চাকরি করতে চায়, তাদের জন্য।
					`,
				},
				{
					title: `ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট কোর্সে ভর্তির ফর্ম কিভাবে পাবো?`,
					content: `
						https://web.techparkit.org ওয়েবসাইটে গিয়ে sign up করতে হবে, 
						এরপর Enroll Now তে ক্লিক করে যে ফর্ম আসবে,
					 	সেই ফর্মটা ফিলাপ করলে অফিস থেকে যোগাযোগ করা হবে।
					`,
				},
				{
					title: `আপকামিং ওয়েব ডিজাইনের সেমিনারে যুক্ত হতে রেজিস্ট্রেশন ফর্ম কিভাবে পেতে পারি?`,
					content: `
						https://www.techparkit.org/seminar এই লিঙ্কে ভিজিট করলেই জানতে পারবেন।
					`,
				},
				{
					title: `কোর্স ফি?`,
					content: `
						কোর্স ফি ১০০০০/- কিন্তু বর্তমানে ২৫% ডিসকাউন্টে পাচ্ছেন ৭৫০০ টাকাই।
					`,
				},
				{
					title: `ফুলস্ট্যাক ওয়েব ডেভেলপমেন্ট উইথ জাভাস্ক্রিপ্টি কোর্সের ইন্সট্রাকটর সম্পর্কে আরো কীভাবে জানতে পারবো?`,
					content: `
						https://web.techparkit.org ওয়েবসাইটটি ভিজিট করতে হবে, আরো বিস্তারিত জানতে 
						অফিসে এসে কথা বলতে পারেন। ঠিকানাঃ বাড়ি ৩১, 
						লেন ০১, ব্লক বি, সেকশন ০৬, মিরপুর, ঢাকা, বাংলাদেশ। (প্রশিকা মোড়ের পাশে)
					`,
				},
				{
					title: `এই কোর্স কমপ্লিট করতে কতদিন সময় লাগবে?`,
					content: `
						রেগুলার প্রাকটিস করলে ৬ মাস সময় লাগবে।
					`,
				},
				{
					title: `আমার কি কি জিনিস লাগবে?`,
					content: `
						সবার প্রথমে প্রয়োজন হবে আপনার ডেডিকেটেড সময় এবং আন্তরিক পরিশ্রম ও অধ্যবসায়। 
						যদি আপনি এগুলো দিতে না পারেন, তাহলে এই কোর্সে এনরোল করে আপনার কোন লাভ হবেনা। 
						এছাড়া আপনার প্রয়োজন হবে একটি ল্যাপটপ বা কম্পিউটার যেখানে 
						Google Chrome ব্রাউজার, Node.js এবং VS Code এডিটর ইন্সটল করা থাকতে হবে।
					`,
				},
				{
					title: `আমার প্রশ্নের উত্তর এখানে নেই। কোথায় প্রশ্ন করবো?`,
					content: `
						আপনার জন্য আমাদের সাপোর্ট সেন্টার। 
						মোবাইল : 01719229595
						টেলিগ্রাম : 01719229595
						হোয়াটসঅ্যাপ : 01719229595
						ইমেইল : techparkitofficial@gmail.com
					`,
				},
			];
		},
	},
};
</script>

<style></style>
