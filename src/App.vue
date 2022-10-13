<template>
	<div>
		<router-view />
	</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
	data: function () {
		return {};
	},
	created: function () {
		this.check_auth_status();
	},
	watch: {
		get_check_auth_status: {
			handler: function () {
				this.check_auth_status();
			},
		},
	},
	methods: {
		...mapActions(["fetch_auth_info"]),
		...mapMutations(["set_logout", "set_check_auth_status"]),
		check_auth_status: async function () {
			let token = window.localStorage.token;
			if (token) {
				window.axios.default.defaults.headers.common[
					"Authorization"
				] = `Bearer ${token}`;
				let check = await this.fetch_auth_info();
				if (!check) {
					delete window.axios.default.defaults.headers.common
						.Authorization;
					delete window.localStorage.token;
				}
			}
		},
	},
	computed: {
		...mapGetters([
			"get_check_auth_status",
			"get_auth_role_name",
			"get_auth_token",
		]),
	},
};
</script>
