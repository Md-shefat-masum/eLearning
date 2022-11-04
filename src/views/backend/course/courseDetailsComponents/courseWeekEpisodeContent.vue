<template>
	<div>
		<i class="far fa-play-circle watched not"></i>
		<a
			@click.prevent="watch_video(content, $event.target)"
			class="video_link_btn"
			:data-title="content.title"
			:data-content_id="content.id"
			:class="{
				active: content.content === get_course_content.video_url,
			}"
			href="#"
		>
			{{ content.title }}
		</a>
		<i
			v-if="content.course_task_completions.length"
			class="far fa-check-circle watched yes"
		></i>
		<i
			v-else
			class="far fa-check-circle watched pending"
		></i>
	</div>
</template>

<script>
// import axios from "axios";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
	props: ["content"],
	created: function () {
		setTimeout(() => {
			this.init_jq();
		}, 300);
	},
	watch: {
		get_course_content: {
			handler: function () {
				setTimeout(() => {
					// this.init_jq();
				}, 300);
			},
		},
	},
	methods: {
		...mapActions(["fetch_course_content","add_to_completed_task"]),
		...mapMutations(['set_selected_content_type','set_selected_content']),
		fetch_content: function () {
			this.fetch_course_content({ batch_id: this.$route.params.id });
		},
		watch_video: function (content, target) {
			document
				.querySelectorAll(".video_link_li a")
				.forEach((i) => i.classList.remove("active"));
			target.classList.add("active");
			this.add_to_completed_task(content);
			this.set_selected_content(content);
			this.set_selected_content_type('video');
		},
		init_jq: function () {
			let $ = window.$;

			if ($(".video_link_btn.active").length) {
				$(".video_link_btn.active")
					.parent("div")
					.parent("li")
					.parent("ul")
					.parent("li.module_list_items")
					.addClass("active");

				$(".video_link_btn.active")
					.parent("div")
					.parent("li")
					.parent("ul")
					.parent("li.module_list_items")
					.siblings("li.module_name")
					.addClass("active");

				$(".video_link_btn.active")[0].scrollIntoView({
					behavior: 'smooth',
					// start, center, end, or nearest. Defaults to start.
					block: "center",
					// start, center, end, or nearest. Defaults to nearest.
					inline: "start",
				});

				setTimeout(() => {
					$("html")[0].scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					})
				}, 1000);
			}

			// $(".quiz_btn").on("click", function (e) {
			// 	e.preventDefault();
			// 	let id = $(this).data("id");
			// 	window.module_related_quiz_id = $(this).data(
			// 		"module_related_quiz_id"
			// 	);
			// 	// console.log(id);
			// 	// $("#quizModal").modal("show");
			// 	axios.get("/course/quiz/get/" + id).then((res) => {
			// 		$(".quiz_form_body").html(res.data);
			// 		setTimeout(() => {
			// 			// init_quiz_submit();
			// 		}, 500);
			// 	});
			// });

			// $(".module_name").on("click", function (e) {
			// 	let target = $(e.currentTarget).data("toggle_target");
			// 	console.log(e.currentTarget,target);
			// 	$(e.currentTarget).siblings(target).toggleClass("active");
			// 	$(e.currentTarget).toggleClass("active");
			// });
		},
	},
	computed: {
		...mapGetters(["get_course_content"]),
	},
};
</script>

<style></style>
