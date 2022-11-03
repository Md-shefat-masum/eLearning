<template>
	<div class="quiz_submission_body">
		<div class="top">
			<h2 class="heading">
				Quiz-{{ get_selected_quiz.quiz_no }}
				{{ get_selected_quiz.title }}
			</h2>
			<h2 v-if="isSubmittedQuiz" class="count">
				{{ get_selected_quiz_mark }}/{{get_selected_quiz_questions.length}}
			</h2>
			<div class="text-start mt-2 question_no">
				Question : 
				{{ question_index + 1 }} of 
				{{ get_selected_quiz_questions.length }}
			</div>
		</div>
		<div class="quiz_form">
			<div class="question_list">
				<div class="question">
					<h3 class="d-flex">
						<span> {{ question_index + 1 }}. &nbsp; </span>
						<span>
							{{ get_selected_quiz_question.title }}
						</span>
					</h3>
				</div>
				<div class="options">
					<ol type="1">
						<quiz-body-option
							v-for="(
								quiz_questions_option, index
							) in get_selected_quiz_question.course_batch_season_week_episode_quiz_question_answers"
							:key="quiz_questions_option.id"
							:option="quiz_questions_option"
							:index="{ serial: index + 1 }"
							:submissions="
								get_selected_quiz_question.course_batch_season_week_episode_quiz_submissions
							"
							:select_quiz_question_option="
								select_quiz_question_option
							"
							:remove_quiz_question_option="
								remove_quiz_question_option
							"
						></quiz-body-option>
					</ol>
				</div>
			</div>
		</div>

		<div v-if="isSubmittedQuiz" class="navigate">
			<button
				v-if="question_index > 0"
				@click.prevent="go_to_prev()"
				class="btn btn-primary"
			>
				<i class="fa fa-angle-left"></i> Prev
			</button>
			<button
				@click.prevent="go_to_next()"
				v-if="
					question_index < get_selected_quiz_questions.length - 1
				"
				class="btn btn-primary"
			>
				Next <i class="fa fa-angle-right"></i>
			</button>
		</div>

		<div v-else class="navigate">
			<button
				v-if="question_index > 0"
				@click.prevent="go_to_prev()"
				class="btn btn-primary"
			>
				<i class="fa fa-angle-left"></i> Prev
			</button>
			<button
				@click.prevent="go_to_next()"
				v-if="
					get_selected_quiz_question
						.course_batch_season_week_episode_quiz_submissions
						.submissions &&
					get_selected_quiz_question
						.course_batch_season_week_episode_quiz_submissions
						.submissions.length && 
					question_index < get_selected_quiz_questions.length - 1
				"
				class="btn btn-primary"
			>
				Next <i class="fa fa-angle-right"></i>
			</button>
			<button
				@click.prevent="fetch_submit_quiz()"
				v-if="
				get_selected_quiz_question
						.course_batch_season_week_episode_quiz_submissions.submissions &&
					get_selected_quiz_question
						.course_batch_season_week_episode_quiz_submissions.submissions
						.length &&
					question_index == get_selected_quiz_questions.length - 1
				"
				class="btn btn-warning"
			>
				<i class="fa fa-upload text-dark"></i> Submit
			</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import quizBodyOption from "./quizBodyOption.vue";
export default {
	components: { quizBodyOption },
	created: function () {
		this.set_selected_quiz_questions(
			this.get_selected_quiz
				.course_batch_season_week_episode_quiz_questions
		);
		this.select_quiz_question();
	},
	watch: {
		get_selected_quiz_questions:{
			handler:function(){
				this.question_index = 0;
			},
		},
	},
	data: function () {
		return {
			question_index: 0,
		};
	},
	methods: {
		...mapActions(["fetch_submit_quiz"]),
		...mapMutations([
			"set_selected_quiz_questions",
			"set_selected_quiz_question",
			"set_selected_quiz_question_submissions",
		]),
		select_quiz_question: function () {
			this.set_selected_quiz_question(
				this.get_selected_quiz
					.course_batch_season_week_episode_quiz_questions[
					this.question_index
				]
			);
		},
		select_quiz_question_option: function (option) {
			// let submissions = [
			// 	...this.get_selected_quiz_question
			// 		.course_batch_season_week_episode_quiz_submissions,
			// ];
			// // each submission of quiz as array
			// let new_submission = {
			// 	course_batch_season_week_episode_quiz_question_id:
			// 		this.get_selected_quiz_question.id,
			// 	submitted_answer_id: option.id,
			// };
			// submissions.push(new_submission);

			// // each submission of quiz as object
			let submissions =
				JSON.parse(JSON.stringify(this.get_selected_quiz_question
					.course_batch_season_week_episode_quiz_submissions));

			if (
				typeof submissions === "object" &&
				Array.isArray(submissions) === false
			) {
				submissions = {
					...this.get_selected_quiz_question
						.course_batch_season_week_episode_quiz_submissions,
				};
			}else{
				submissions = new Object();
			}

			if(!Object.prototype.hasOwnProperty.call(submissions, "quiz_question_id")){
				submissions.quiz_question_id = this.get_selected_quiz_question.id;
			}

			if(!Object.prototype.hasOwnProperty.call(submissions, "submissions")){
				submissions.submissions = [option.id];
			}else{
				submissions.submissions.push(option.id);
			}
			this.set_selected_quiz_question_submissions(submissions);
			// console.log(submissions, option);
		},
		remove_quiz_question_option: function (option) {
			// let submissions = [
			// 	...this.get_selected_quiz_question
			// 		.course_batch_season_week_episode_quiz_submissions,
			// ];
			// submissions = submissions.filter(
			// 	(item) => item.submitted_answer_id !== option.id
			// );

			let submissions =
				JSON.parse(JSON.stringify(this.get_selected_quiz_question
						.course_batch_season_week_episode_quiz_submissions));

			submissions.submissions = submissions.submissions.filter(i => i !== option.id);

			this.set_selected_quiz_question_submissions(submissions);
			// console.log(option, this.get_selected_quiz_question, submissions);
		},
		go_to_next: function () {
			if (
				this.question_index >= 0 &&
				this.question_index <
					this.get_selected_quiz_questions.length - 1
			) {
				this.question_index++;
				this.select_quiz_question();
			}
		},
		go_to_prev: function () {
			if (
				this.question_index > 0 &&
				this.question_index < this.get_selected_quiz_questions.length
			) {
				this.question_index--;
				this.select_quiz_question();
			}
		},
	},
	computed: {
		...mapGetters([
			"get_selected_quiz",
			"get_selected_quiz_questions",
			"get_selected_quiz_question",
			"get_selected_quiz_question_options",
			"get_selected_quiz_mark",
		]),
		isSubmittedQuiz: function(){
			let check = false;
			if(this.get_selected_quiz.course_task_completions.length){
				check = true;
			}
			return check;
		}
	},
};
</script>

<style></style>
