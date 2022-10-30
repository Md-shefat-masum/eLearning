import axios from "axios";

// states
const state = {
	user_courses: [],
	course_content: [],
};

// getters
const getters = {
	get_user_courses: (state) => state.user_courses,
	get_course_content: (state) => state.course_content,
};

// action
const actions = {
	fetch_user_courses: function () {
		axios.get(`/course/list`)
			.then(({ data }) => {
				this.commit('set_user_courses', data);
				console.log(data);
			});
	},
	fetch_course_content: async function (state, { batch_id }) {
		let res = await axios.get(`/course/course-content/${batch_id}/batch`);
		let data = await res.data;
		await this.commit('set_course_content', data);
		console.log(data, batch_id);
			
	},
};

// mutators

const mutations = {
	set_user_courses: function (state, user_courses) {
		state.user_courses = user_courses;
	},
	set_course_content: function (state, course_content) {
		state.course_content = course_content;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
