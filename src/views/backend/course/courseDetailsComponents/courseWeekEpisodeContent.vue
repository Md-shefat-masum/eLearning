<template>
	<div>
		<i
			v-if="content.course_task_completions.length"
			class="far fa-check-circle watched yes"
		></i>
		<i v-else class="far fa-times-circle watched not"></i>
		<a
			@click="watch_video(content, $event.target)"
			class="video_link_btn"
			:class="{
				active: content.content === get_course_content.video_url,
			}"
			href="#"
		>
			{{ content.title }}
		</a>
	</div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
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
					this.init_jq();
				}, 300);
			},
		},
	},
	methods: {
		...mapActions(["fetch_course_content"]),
		fetch_content: function () {
			this.fetch_course_content({ batch_id: this.$route.params.id });
		},
		watch_video: function (content, target) {
			document
				.querySelectorAll(".video_link_btn")
				.forEach((i) => i.classList.remove("active"));
			target.classList.add("active");
			this.selected_video = content.content;
			this.selected_content_type = content.type;
			this.add_to_completed_task(content);
		},
		add_to_completed_task: function (content) {
			axios
				.post(`/course/module-video-watch/set-to-watch-list`, {
					class_module_video_id: content.id,
					watching_video_id: this.watching_video_id,
				})
				.then((res) => {
					// if (res.data != "ok") {
					// 	content.course_task_completions.push(res.data);
					// }
					this.fetch_content();
					console.log(res.data);
				});
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
				$(".video_link_btn.active")[0].scrollIntoView({
					behavior: "smooth",
					block: "center",
					inline: "nearest",
				});
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
