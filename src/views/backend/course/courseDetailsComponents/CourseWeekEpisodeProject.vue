<template>
	<li class="video_link_li" v-for="project in projects" :key="project.id">
		<div>
			<i class="fa fa-book watched not"></i>
			<a
				class="project_btn"
				@click.prevent="load_project(project, $event.target)"
				href="#"
			>
				project - {{ project.title }}
			</a>
			<i v-if="project.course_task_completions.length" class="far fa-check-circle watched yes"></i>
			<i v-else class="far fa-check-circle watched pending"></i>
			
		</div>
	</li>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	props: ['projects'],
	created: function(){
		// console.log(this.quizzes);
	},
	methods: {
		...mapMutations(['set_selected_content_type','set_selected_homework']),
		load_project: function(project, target){
			document
				.querySelectorAll(".video_link_li a")
				.forEach((i) => i.classList.remove("active"));
			target.classList.add("active");

			this.set_selected_content_type('project')
			this.set_selected_homework(project)
		}
	}
};
</script>

<style></style>
