<template>
	<div class="nav_dashboard_link">
		<router-link class="nav-link" to="/dashboard">Dashboard</router-link>
		<div class="profile_links">
			<div class="profile_image">
				<img :src="user.photo" alt="" />
			</div>
			<div class="drop_down_menu">
				<div class="top">
					<div class="img">
						<img :src="user.photo" alt="" />
					</div>
					<h2>{{ user.username }}</h2>
					<h3>student ID: web-{{ user.slug }}</h3>
				</div>
				<div class="bottom">
					<ul>
						<li>
							<router-link :to="{ name: 'dashboardProfile' }">
								<i class="fa fa-user-circle"> </i>
								Profile
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'dashboard' }">
								<i class="fa fa-tachometer-alt"> </i>
								Dashboard
							</router-link>
						</li>
						<li>
							<a @click.prevent="logout" href="#">
								<i class="fa fa-sign-out-alt"> </i>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
	created: function () {},
	methods: {
		...mapMutations(["set_logout"]),
		logout: function () {
			if (window.confirm("sure want to logout?")) {
				this.set_logout();
			}
		},
	},
	computed: {
		...mapGetters([
			"get_check_auth_status",
			"get_auth_info",
			"get_profile_photo_url",
		]),
		user: function () {
			return {
				...this.get_auth_info,
				photo: this.get_profile_photo_url,
			};
		},
	},
};
</script>

<style></style>
