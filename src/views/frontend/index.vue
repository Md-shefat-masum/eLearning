<template>
	<div>
		<Banner></Banner>
		<About></About>
		<WhyBest></WhyBest>
		<Feature></Feature>
		<DealOfWeek></DealOfWeek>
		<Pricing></Pricing>
		<Video></Video>
		<Compare></Compare>
		<Testimonial></Testimonial>
		<Subscribe></Subscribe>
		<Faq></Faq>
		<Contact></Contact>
	</div>
</template>

<script>
import Banner from "./home/banner.vue";
import About from "./home/about.vue";
import WhyBest from "./home/whyBest.vue";
import Feature from "./home/feature.vue";
import DealOfWeek from "./home/dealOfWeek.vue";
import Pricing from "./home/pricing.vue";
import Testimonial from "./home/testimonial.vue";
import Subscribe from "./home/subscribe.vue";
import Faq from "./home/faq.vue";
import Contact from "./home/contact.vue";
export default {
	components: {
    Banner,
    About,
    WhyBest,
    Feature,
    DealOfWeek,
    Pricing,
    Testimonial,
    Subscribe,
    Faq,
    Contact
},
};
</script>

<style></style>
