<template>
	<div>
		<h5 class="progress_heading">
			Video watched: 
			{{ get_course_content.course_report.total_videos_complete }} /
			{{ get_course_content.course_report.total_videos }} 
		</h5>
		<div class="pb-3 pt-2 mb-1">
			<div class="progress">
				<div
					class="progress-bar"
					role="progressbar"
					:style="`width: ${get_course_content.course_report.avg}%`"
					aria-valuenow="25"
					aria-valuemin="0"
					aria-valuemax="100"
				>
					{{ get_course_content.course_report.avg }}%
				</div>
			</div>
			<p class="progress_p">
				To obtain a certificate, you must complete all modules.
			</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['get_course_content'])
	}
};
</script>

<style></style>
