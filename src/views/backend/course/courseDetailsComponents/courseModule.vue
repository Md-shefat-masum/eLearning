<template>
	<ul class="course_outline">
		<span
			v-for="course_module in get_course_content.modules"
			:key="course_module.id"
		>
			<li>
				<h5>{{ course_module.title }}</h5>
			</li>
			<li>
				<ul class="week_list_body">
					<div
						v-for="week in course_module.course_batch_season_week"
						:key="week.id"
					>
						<course-week :week="week"></course-week>
					</div>
				</ul>
			</li>
		</span>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex';
import courseWeek from './courseWeek.vue';
export default {
    components: { courseWeek },
	computed: {
		...mapGetters(['get_course_content'])
	}
};
</script>

<style></style>
