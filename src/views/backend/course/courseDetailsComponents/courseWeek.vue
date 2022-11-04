<template>
	<div>
		<li>
			<h6>
				{{ week.title }}
			</h6>
		</li>
		<li>
			<ul
				class="module_list_body"
				v-for="episode in week.course_batch_season_week_episodes"
				:key="episode.id"
			>
				<course-week-episode :episode="episode"></course-week-episode>
			</ul>
		</li>
		<li class="video_link_li mb-3 ms-3 d-none">
			<i></i>
			<a
				class="assignment_btn"
				data-assignment_no="1"
				data-class_module_video_id="1"
				href="#"
			>
				Assignment-1 : company website
			</a>
		</li>
	</div>
</template>

<script>
import courseWeekEpisode from './courseWeekEpisode.vue';
export default {
    components: { courseWeekEpisode },
	props: ['week'],
	
};
</script>

<style></style>
