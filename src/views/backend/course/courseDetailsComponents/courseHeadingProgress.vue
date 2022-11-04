<template>
	<div>
		<h5 class="progress_heading d-flex gap-2">
			<div>
				Video watched: 
				{{ get_course_content.course_report.total_videos_complete }} /
				{{ get_course_content.course_report.total_videos }} 
			</div>
			<div class="flex-1">
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
		</h5>
		<div class="pb-3 pt-2 mb-1">
			<div class="search_box">
				<form action="#" class="search_lesson_form">
					<input @keyup="set_search_content($event.target.value)" type="search" class="search_lesson_input" placeholder="search lesson">
					<i class="fa fa-search search_icon"></i>
					<div class="search_result" v-if="get_course_content_search_result.length">
						<ul>
							<li v-for="i in get_course_content_search_result" :key="i">
								<a @click.prevent="load_video(i)" href="#" v-html="i.search_title"></a>
							</li>
						</ul>
					</div>
				</form>
			</div>
			<p class="progress_p">
				To obtain a certificate, you must complete all modules.
			</p>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
	methods: {
		...mapActions(['add_to_completed_task']),
		...mapMutations(['set_search_content','set_selected_video','set_selected_content_type','set_selected_content']),
		load_video: function(content){
			this.add_to_completed_task(content);
			this.set_selected_content(content);
			this.set_selected_content_type('video');
			
			let video_link_btn = document.querySelector(`a[data-title="${content.title}"]`);

			if(video_link_btn){
				document.querySelector('.search_lesson_form').reset();
				this.set_search_content('');

				let $ = window.$;

				$(".video_link_li a").removeClass('active')
				video_link_btn.classList.add("active");

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
		}
	},
	computed: {
		...mapGetters(['get_course_content','get_course_content_search_result'])
	}
};
</script>

<style></style>
