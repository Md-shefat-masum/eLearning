<template>
	<div>
		<Banner></Banner>
		<Features></Features>
		<CourseSegments></CourseSegments>
		<ClassBasedCourseModules></ClassBasedCourseModules>
		<Projects></Projects>
		<WhatYouWillLearn></WhatYouWillLearn>
		<free-course></free-course>
		<HowCourseWillRun></HowCourseWillRun>
		<Instructor></Instructor>
		<Faq></Faq>
		<Contact></Contact>
	</div>
</template>

<script>
import Banner from "./home/banner.vue";
import Features from "./home/features.vue";
import CourseSegments from "./home/courseSegments.vue";
import ClassBasedCourseModules from "./home/classBasedCourseModules.vue";
import Projects from "./home/projects.vue";
import HowCourseWillRun from "./home/howCourseWillRun.vue";
import Faq from "./home/faq.vue";
import Contact from "./home/contact.vue";
import Instructor from "./home/instructor.vue";
import WhatYouWillLearn from "./home/whatYouWillLearn.vue";
import FreeCourse from "./home/freeCourse.vue";
export default {
	components: {
		Banner,
		Features,
		CourseSegments,
		Instructor,
		ClassBasedCourseModules,
		Projects,
		WhatYouWillLearn,
		HowCourseWillRun,
		FreeCourse,
		Faq,
		Contact,
	},
	created: function () {
		// window.homePagePlugins();
	},
};
</script>

<style></style>
