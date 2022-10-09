<template>
	<div>
		<header>
			<ul>
				<li>
					<router-link :to="{name:'frontend'}">frontend</router-link>
				</li>
				<li>
					<router-link :to="{name:'about'}">about</router-link>
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
export default {};
</script>

<style></style>
