<template>
	<div>
		<Banner></Banner>
		<Features></Features>
		<CourseSegments></CourseSegments>
		<Faq></Faq>
		<Contact></Contact>
		<Projects></Projects>
		<Instructor></Instructor>
		<ClassBasedCourseModules></ClassBasedCourseModules>
		<!-- <courseModules></courseModules> -->
		<!-- <free-course></free-course>
		<Projects></Projects>
		<HowCourseWillRun></HowCourseWillRun>
		<WhatYouWillLearn></WhatYouWillLearn>
		<Faq></Faq> -->
		<!-- <Video></Video> -->
		<!-- <Compare></Compare> -->
		<!-- <Testimonial></Testimonial> -->
		<!-- <Subscribe></Subscribe> -->
		<!-- <Contact></Contact> -->
	</div>
</template>

<script>
import Banner from "./home/banner.vue";
import Features from "./home/features.vue";
import CourseSegments from "./home/courseSegments.vue";
import ClassBasedCourseModules from "./home/classBasedCourseModules.vue";
// import courseModules from "./home/courseModules.vue";
import Projects from "./home/projects.vue";
// import HowCourseWillRun from "./home/howCourseWillRun.vue";
import Faq from "./home/faq.vue";
import Contact from "./home/contact.vue";
import Instructor from "./home/instructor.vue";
// import WhatYouWillLearn from "./home/whatYouWillLearn.vue";
// import FreeCourse from './home/freeCourse.vue';
export default {
	components: {
    Banner,
    Features,
	CourseSegments,
	Instructor,
	ClassBasedCourseModules,
    // courseModules,
    Projects,
	// HowCourseWillRun,
    Faq,
    Contact,
    // WhatYouWillLearn,
// FreeCourse
},
	created: function () {
		// window.homePagePlugins();
	},
};
</script>

<style>


</style>
