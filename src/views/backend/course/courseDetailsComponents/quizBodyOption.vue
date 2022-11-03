<template>
	<li
		@click.prevent="select_option($event.target)"
		:class="{ 
			active: isInSubmissionList ,
			attended: isInQuizAttended,
			correct: isInQuizAttended && isSubmittedAnswerIsCorrect,
			wrong: isInQuizAttended && !isSubmittedAnswerIsCorrect,
			right_answer: isQuizCorrectAnswer,
		}"
	>
		<span class="number"> {{ index.serial }}. &nbsp;&nbsp; </span>
		{{ option.title }}
	</li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	props: [
		"option",
		"index",
		"select_quiz_question_option",
		"remove_quiz_question_option",
		"submissions",
	],
	data: function () {
		return {
			isSelected: false,
		};
	},
	watch: {
		isSelected: {
			handler: function (newV) {
				if (newV) {
					this.select_quiz_question_option(this.option);
				} else {
					this.remove_quiz_question_option(this.option);
				}
			},
		},
	},
	created: function () {
		// console.log(this.isInQuizAttended, this.isQuizCorrectAnswer);
	},
	methods: {
		select_option: function (event) {
			if(this.get_selected_quiz.course_task_completions.length === 0){
				event.classList.toggle("active");
				this.isSelected = !this.isSelected;
			}
		},
	},
	computed: {
		...mapGetters(["get_selected_quiz_question","get_selected_quiz"]),
		isQuizCorrectAnswer: function(){
			let correct_answer = this.get_selected_quiz_question.cid;
			correct_answer = correct_answer.substring(6,correct_answer.length)
			if(this.get_selected_quiz.course_task_completions.length && parseInt(correct_answer) === this.option.id){
				return true;
			}
			return false;
		},
		isInQuizAttended: function () {
			console.log(this.get_selected_quiz_question);
			let selected_quiz_question_submissions = this.get_selected_quiz_question.course_batch_season_week_episode_quiz_submissions;
			let check = false;
			if(Array.isArray(selected_quiz_question_submissions) ){
				selected_quiz_question_submissions.forEach(e=>{
					if(e.submitted_answer_id === this.option.id){
						check = true;
						console.log(e.submitted_answer_id, {...this.option});
					}
				})
			}
			return check;
		},
		isSubmittedAnswerIsCorrect: function () {
			// console.log(this.get_selected_quiz_question);
			let mark = this.get_selected_quiz_question.course_batch_season_week_episode_quiz_submissions_sum_mark;
			let check = false;
			if(parseInt(mark) === 1){
				check = true;
			}
			return check;
		},
		isInSubmissionList: function () {
			let check_exists = -1;

			// check_exists = this.submissions.findIndex(
			// 	(i) => i.submitted_answer_id === this.option.id
			// );

			check_exists = this.submissions.submissions?.includes(
				this.option.id
			);

			if (check_exists) {
				return true;
			} else {
				return false;
			}
		},
	},
};
</script>

<style></style>
