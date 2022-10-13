import axios from "axios";

// states
const state = {
	check_auth_status: false,
	auth_info: {
		first_name: null,
		last_name: null,
		email: null,
		username: null,
		photo: null,
		phone: null,
		address: null,
		status: null,
		role_name: "student",
	},
	auth_role_name: "student",
	auth_token: "",
	api_url: process.env.VUE_APP_MY_SERVER_BASE_API,
	server_url: process.env.VUE_APP_MY_SERVER_BASE,
};

// getters
const getters = {
	get_check_auth_status: (state) => state.check_auth_status,
	get_auth_info: (state) => state.auth_info,
	get_auth_role_name: (state) => state.auth_role_name,
	get_auth_token: (state) => state.auth_token,
	get_api_url: (state) => state.api_url,
	get_profile_photo_url: (state) =>
		state.server_url + "/" + state.auth_info.photo,
};

// action
const actions = {
	register: function ({ getters }, form) {
		// console.log(state, form, this.dispatch('get_api_url'));
		let form_data = new FormData(form);
		axios.post(`${getters.get_api_url}/user/api-register`, form_data)
			.then((res) => {
				// console.log(res.data);
				this.commit('set_auth_info', res.data);
				window.localStorage.setItem('token', res.data.access_token);
				form.reset();
				window.s_alert('success', 'user registered successfully.');
			});
	},
	login: function ({ getters }, form) {
		// console.log(state, form, this.dispatch('get_api_url'));
		let form_data = new FormData(form);
		axios.post(`${getters.get_api_url}/user/api-login`, form_data)
			.then((res) => {
				// console.log(res.data);
				this.commit('set_auth_info', res.data);
				window.localStorage.setItem('token', res.data.access_token);
				form.reset();
			});
	},
	fetch_auth_info: async function ({ getters }) {
		let res = await axios.get(`${getters.get_api_url}/user/check-auth`);
		let data = res.data;
		if (data) {
			await this.commit('set_auth_info', data);
			return true;
		} else {
			return false;
		}
	},
};

// mutators

const mutations = {
	set_auth_role_name: function (state, auth_role_name) {
		state.auth_role_name = auth_role_name;
	},
	set_check_auth_status: function (state, check_auth_status) {
		state.check_auth_status = check_auth_status;
	},
	set_auth_info: function (state, user) {
		state.auth_info.username = user.username;
		state.auth_info.email = user.email;
		state.auth_info.role_name = user.role_information.title;
		state.auth_info.photo = user.photo;
		state.auth_info.slug = user.slug;

		this.commit("set_auth_role_name", user.role_information.title);
		this.commit("set_check_auth_status", true);
	},
	set_logout: function (state) {
		delete window.axios.default.defaults.headers.common
			.Authorization;
		delete window.localStorage.token;
		state.check_auth_status = false;
		state.auth_info = {
			first_name: null,
			last_name: null,
			email: null,
			username: null,
			photo: null,
			phone: null,
			address: null,
			status: null,
		};
	},
	set_auth_token: function (state, info) {
		state.auth_token = info.token;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
