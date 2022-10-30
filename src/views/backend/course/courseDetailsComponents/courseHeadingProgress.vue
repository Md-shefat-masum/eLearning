<template>
	<div>
		<h5 class="mb-1">{{ get_course_content.modules[0].title }}</h5>
		<div class="py-3 mb-1">
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
