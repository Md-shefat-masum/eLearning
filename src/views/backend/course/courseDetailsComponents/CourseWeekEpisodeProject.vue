<template>
	<li class="video_link_li" v-for="project in projects" :key="project.id">
		<i class="far fa-times-circle watched not"></i>
		<a
			class="project_btn"
			href="#"
		>
			project - {{ project.title }}
		</a>
	</li>
</template>

<script>
export default {
	props: ['projects'],
	created: function(){
		// console.log(this.quizzes);
	}
};
</script>

<style></style>
