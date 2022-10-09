<template>
	<div>
		<header>
			<a href="" class="" id=""> hi </a>
			<ul>
				<li>
					<router-link :to="{ name: 'dashboard' }">
						dashboard
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'dashboardSettings' }">
						settings
					</router-link>
				</li>
			</ul>
		</header>
		<router-view></router-view>
		<footer>
			<h1>footer</h1>
		</footer>
	</div>
</template>

<script>
export default {
	data: function () {
		return {};
	},
	methods: {
		get_all: function () {
			return "ok";
		},
	},
};
</script>

<style></style>
