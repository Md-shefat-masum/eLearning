<template>
	<li class="video_link_li" v-for="quiz in quizzes" :key="quiz.id">
		<div>
			<i class="fa fa-stopwatch watched not"></i>
			
			<a
				class="quiz_btn"
				@click.prevent="load_quiz(quiz, $event.target)"
				href="#"
			>
				Quiz {{ quiz.quiz_no }} - {{ quiz.title }}
			</a>
			<i v-if="quiz.course_task_completions.length" class="far fa-check-circle watched yes"></i>
			<i v-else class="far fa-check-circle watched pending"></i>
		</div>
	</li>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	props: ['quizzes'],
	methods: {
		...mapMutations(['set_selected_quiz', 'set_selected_content_type']),
		load_quiz: function(quiz, target){
			document
				.querySelectorAll(".video_link_li a")
				.forEach((i) => i.classList.remove("active"));
			target.classList.add("active");

			this.set_selected_content_type('quiz');
			this.set_selected_quiz(quiz);
		}
	},
};
</script>

<style></style>
