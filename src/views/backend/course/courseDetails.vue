<template>
	<section class="my-5 py-5">
		<div class="container">
			<div class="card shadow-0 border border-1 bg_deep_dark">
				<div class="card-body" v-if="get_course_content.modules">
					<div class="row">
						<div class="col-lg-6 col-xl-8">
							<div
								class="iframe-parent-class"
								style="height: auto"
							>
								<iframe
									v-if="selected_content_type == 'video'"
									id="video_player"
									class="iframe_player"
									:src="selected_video"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen=""
								>
								</iframe>
							</div>
						</div>

						<div class="col-lg-6 col-xl-4">
							<course-heading-progress></course-heading-progress>
							<div class="course_details_content custom_scroll2">
								<course-module></course-module>
							</div>
						</div>

						<div class="col-12"></div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="modal swipe-left"
			id="quizModal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="quizModal"
			aria-hidden="true"
		>
			<div
				class="modal-dialog modal-dialog-centered modal-lg"
				role="document"
			>
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="quiz_title"></h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true"></span>
						</button>
					</div>
					<form action="#" class="quiz_submit_form">
						<div class="modal-body">
							<div class="quiz_form_body"></div>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								id="quiz_submit_btn"
								class="btn btn-primary"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import courseHeadingProgress from './courseDetailsComponents/courseHeadingProgress.vue';
import CourseModule from './courseDetailsComponents/courseModule.vue';

export default {
    components: { courseHeadingProgress, CourseModule },
	created: function () {
		document.querySelectorAll('body')[0].scrollIntoView();
		
		if (!this.get_course_content.length) {
			this.fetch_content();
		}
	},
	watch: {
		get_course_content: {
			handler: function (newV) {
				console.log(newV);
				this.selected_video = newV.video_url;
			},
		},
	},
	data: function () {
		return {
			course_content: {},
			watching_video_id: null,
			selected_video: "",
			selected_content_type: "video",
		};
	},
	methods: {
		...mapActions(["fetch_course_content"]),
		fetch_content: function () {
			this.fetch_course_content({ batch_id: this.$route.params.id });
		},
	},
	computed: {
		...mapGetters(["get_course_content"]),
	},
};
</script>

<style scoped>
.container{
	max-width: 1400px;
}
</style>
