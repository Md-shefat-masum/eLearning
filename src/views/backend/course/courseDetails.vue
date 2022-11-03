<template>
	<section class="course_details_pt">
		<div class="container">
			<div class="card shadow-0 border-0 bg_transparent">
				<div class="card-body" v-if="get_course_content.modules">
					<div class="row">
						<div class="col-lg-7 col-xl-8">
							<div
								class="iframe-parent-class"
								style="height: auto"
							>
								<iframe
									v-if="get_selected_content_type == 'video'"
									id="video_player"
									class="iframe_player"
									:src="get_selected_video"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen=""
								>
								</iframe>
								<quiz-body v-if="get_selected_content_type == 'quiz'"></quiz-body>
							</div>
						</div>

						<div class="col-lg-5 col-xl-4">
							<div class="course_module_content_body">
								<course-heading-progress></course-heading-progress>
								<div class="course_details_content custom_scroll2">
									<course-module></course-module>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import courseHeadingProgress from './courseDetailsComponents/courseHeadingProgress.vue';
import CourseModule from './courseDetailsComponents/courseModule.vue';
import QuizBody from './courseDetailsComponents/quizBody.vue';

export default {
    components: { courseHeadingProgress, CourseModule, QuizBody },
	created: function () {
		document.querySelectorAll('body')[0].scrollIntoView();
		
		if (!this.get_course_content.length) {
			this.fetch_content();
		}
	},
	watch: {
		get_course_content: {
			handler: function () {
				// this.set_selected_content_type("video")
				// this.set_selected_video(newV.video_url)
			},
		},
	},
	data: function () {
		return {
			course_content: {},
			watching_video_id: null,
			selected_video: "",
		};
	},
	methods: {
		...mapActions(["fetch_course_content"]),
		...mapMutations(["set_selected_content_type", "set_selected_video"]),
		fetch_content: function () {
			this.fetch_course_content({ batch_id: this.$route.params.id });
		},
	},
	computed: {
		...mapGetters(["get_course_content", "get_selected_content_type", "get_selected_video"]),
	},
};
</script>

<style scoped>
.container{
	max-width: 1400px;
}
</style>
