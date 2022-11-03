import axios from "axios";

// states
const state = {
	user_courses: [],
	course_content: [],
	selected_content_type: 'project',
	selected_video: '',

	selected_quiz: {},
	selected_quiz_questions: [],
	selected_quiz_question: [],
	selected_quiz_question_options: [],
	selected_quiz_submissions: [],
	selected_quiz_mark: 0,
};

// getters
const getters = {
	get_user_courses: (state) => state.user_courses,
	get_course_content: (state) => state.course_content,
	get_selected_content_type: (state) => state.selected_content_type,
	get_selected_video: (state) => state.selected_video,

	get_selected_quiz: (state) => state.selected_quiz,
	get_selected_quiz_questions: (state) => state.selected_quiz_questions,
	get_selected_quiz_question: (state) => state.selected_quiz_question,
	get_selected_quiz_question_options: (state) => state.selected_quiz_question_options,
	get_selected_quiz_submissions: (state) => state.selected_quiz_submissions,
	get_selected_quiz_mark: (state) => state.selected_quiz_mark,
};

// action
const actions = {
	fetch_user_courses: function () {
		axios.get(`/course/list`)
			.then(({ data }) => {
				this.commit('set_user_courses', data);
				// console.log(data);
			});
	},
	fetch_course_content: async function (state, { batch_id }) {
		let res = await axios.get(`/course/course-content/${batch_id}/batch`);
		let data = await res.data;
		await this.commit('set_course_content', data);
		await this.commit('set_selected_video', data.video_url);
		console.log(data, batch_id);
	},
	fetch_submit_quiz: function (state) {
		// console.log(state.getters.get_selected_quiz_submissions);
		let submissions = state.getters.get_selected_quiz_submissions;
		axios.post('/course/quiz/api-quiz-submission', {
			submissions,
			selected_quiz_id: state.getters.get_selected_quiz.id,
			quiz: state.getters.get_selected_quiz,
		})
			.then(async (res) => {
				// console.log(res.data);
				await state.dispatch('fetch_course_content', { batch_id: window.location.pathname.split('/')[2] });
				this.commit('set_selected_quiz', res.data.quiz);
			})
	}
};

// mutators

const mutations = {
	set_user_courses: function (state, user_courses) {
		state.user_courses = user_courses;
	},

	set_course_content: function (state, course_content) {
		state.course_content = course_content;
	},

	set_selected_content_type: function (state, type = "video") {
		state.selected_content_type = type;
	},

	set_selected_video: function (state, selected_video) {
		state.selected_video = selected_video;
	},

	set_selected_quiz: function (state, selected_quiz) {
		// console.log(selected_quiz);
		state.selected_quiz = selected_quiz;
		this.commit('set_selected_quiz_questions', selected_quiz.course_batch_season_week_episode_quiz_questions)
		this.commit('set_selected_quiz_question', selected_quiz.course_batch_season_week_episode_quiz_questions[0])
		this.commit('set_selected_quiz_mark')
	},

	// all quiz questions list
	set_selected_quiz_questions: function (state, selected_quiz_questions) {
		state.selected_quiz_questions = selected_quiz_questions;
		// console.log(selected_quiz_questions);
	},

	// single quiz question with options
	set_selected_quiz_question: function (state, selected_quiz_question) {
		state.selected_quiz_question = selected_quiz_question;
		// console.log(selected_quiz_question);
	},

	// single selected quiz question options
	set_selected_quiz_question_options: function (state, selected_quiz_question_options) {
		state.selected_quiz_question_options = selected_quiz_question_options;
		// console.log(selected_quiz_question_options);
	},

	// all submitted answer for each quiz
	set_selected_quiz_question_submissions: function (state, submissions) {
		// state.selected_quiz_question.course_batch_season_week_episode_quiz_submissions = [...submissions];
		// state.selected_quiz_submissions = state.selected_quiz_questions.map(i => i.course_batch_season_week_episode_quiz_submissions);

		state.selected_quiz_question.course_batch_season_week_episode_quiz_submissions = { ...submissions };
		state.selected_quiz_submissions = state.selected_quiz_questions.map(i => i.course_batch_season_week_episode_quiz_submissions);
		// console.log(submissions);
	},

	// single selected quiz question options
	set_selected_quiz_mark: function (state) {
		state.selected_quiz_mark = state.selected_quiz_questions.reduce((t, i) => t += parseInt(i.course_batch_season_week_episode_quiz_submissions_sum_mark||0), 0);
		// console.log(state.selected_quiz_questions, state.selected_quiz_mark);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
