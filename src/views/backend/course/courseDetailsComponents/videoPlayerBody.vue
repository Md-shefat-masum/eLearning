<template>
	<div>
		<iframe
			id="video_player"
			class="iframe_player"
			:src="get_selected_video"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen=""
		>
		</iframe>
		<div class="text-right">
			<button class="btn btn-info mx-2" @click="go_prev($event.target)">
				<i class="fa fa-angle-left"></i> Prev
			</button>
			<button class="btn btn-info mx-2" @click="go_next($event.target)">
				Next <i class="fa fa-angle-right"></i>
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
	methods: {
		...mapMutations(['set_navigation_content']),
		go_prev: function (target_btn) {
			let $ = window.$;
			$(target_btn).prop("disabled",true);
			let links = $(".video_link_btn");
			for (let index = 0; index < links.length; index++) {
				const element = links[index];
				if ($(element).hasClass("active")) {
					let target = links[index - 1];
					let content_id = $(target).data('content_id');
					this.set_navigation_content(content_id);
					this.scroll_into_view(target);
					setTimeout(() => {
						$(target_btn).prop("disabled",false);
					}, 1000);
					// console.log(target,content_id);
					break;
				}
			}
		},
		go_next: function (target_btn) {
			let $ = window.$;
			$(target_btn).prop("disabled",true);
			let links = $(".video_link_btn");
			for (let index = 0; index < links.length; index++) {
				const element = links[index];
				if ($(element).hasClass("active")) {
					let target = links[index + 1];
					let content_id = $(target).data('content_id');
					this.set_navigation_content(content_id);
					this.scroll_into_view(target);
					setTimeout(() => {
						$(target_btn).prop("disabled",false);
					}, 1000);
					// console.log(target,content_id);
					break;
				}
			}
		},

		scroll_into_view: function (video_link_btn) {
			let $ = window.$;
			$(".video_link_li a").removeClass("active");
			$(video_link_btn).addClass("active");

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
				behavior: "smooth",
				// start, center, end, or nearest. Defaults to start.
				block: "center",
				// start, center, end, or nearest. Defaults to nearest.
				inline: "start",
			});

			setTimeout(() => {
				$("html")[0].scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				});
			}, 1000);
		},
	},
	computed: {
		...mapGetters(["get_selected_video"]),
	},
};
</script>

<style></style>
