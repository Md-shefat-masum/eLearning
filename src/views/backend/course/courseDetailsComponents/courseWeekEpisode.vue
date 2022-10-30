<template>
	<div>
		<li
			class="module_name"
			@click="toggle_module_list"
			:data-toggle_target="`.list_module_1`"
		>
			<a href="#">
				{{ episode.title }}
			</a>
		</li>
		<li ref="module_list" class="module_list_items list_module_1">
			<ul>
				<li
					v-for="content in episode.course_batch_season_week_episode_contents"
					:key="content.id"
					class="video_link_li"
				>
					<course-week-episode-content
						:content="content"
					></course-week-episode-content>
				</li>
				<course-week-episode-quiz :quizzes="episode.course_batch_season_week_episode_quizzes"></course-week-episode-quiz>
				<course-week-episode-project :projects="episode.course_batch_season_week_episode_projects"></course-week-episode-project>
			</ul>
		</li>
	</div>
</template>

<script>
import courseWeekEpisodeContent from "./courseWeekEpisodeContent.vue";
import CourseWeekEpisodeQuiz from "./courseWeekEpisodeQuiz.vue";
import CourseWeekEpisodeProject from "./CourseWeekEpisodeProject.vue";

export default {
	components: { courseWeekEpisodeContent, CourseWeekEpisodeQuiz, CourseWeekEpisodeProject },
	props: ["episode"],
	methods: {
		toggle_module_list: function () {
			this.$refs.module_list.classList.toggle("active");
		},
	},
};
</script>

<style></style>
