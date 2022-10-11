<template>
	<div>
		<Banner></Banner>
		<Features></Features>
		<courseModules></courseModules>
		<Projects></Projects>
		<HowCourseWillRun></HowCourseWillRun>
		<WhatYouWillLearn></WhatYouWillLearn>
		<Faq></Faq>
		<!-- <Video></Video> -->
		<!-- <Compare></Compare> -->
		<!-- <Testimonial></Testimonial> -->
		<!-- <Subscribe></Subscribe> -->
		<Contact></Contact>
	</div>
</template>

<script>
import Banner from "./home/banner.vue";
import Features from "./home/features.vue";
import courseModules from "./home/courseModules.vue";
import Projects from "./home/projects.vue";
import HowCourseWillRun from "./home/howCourseWillRun.vue";
import Faq from "./home/faq.vue";
import Contact from "./home/contact.vue";
import WhatYouWillLearn from "./home/whatYouWillLearn.vue";
export default {
	components: {
    Banner,
    Features,
    courseModules,
    Projects,
	HowCourseWillRun,
    Faq,
    Contact,
    WhatYouWillLearn
},
	created: function () {
		// window.homePagePlugins();
	},
};
</script>

<style></style>
