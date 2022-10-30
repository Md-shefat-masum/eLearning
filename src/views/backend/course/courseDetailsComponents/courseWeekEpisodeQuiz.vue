<template>
	<li class="video_link_li" v-for="quiz in quizzes" :key="quiz.id">
		<i class="far fa-times-circle watched not"></i>
		<a
			class="quiz_btn"
			href="#"
		>
			Quiz {{ quiz.quiz_no }} - {{ quiz.title }}
		</a>
	</li>
</template>

<script>
export default {
	props: ['quizzes'],
	created: function(){
		// console.log(this.quizzes);
	}
};
</script>

<style></style>
