<template>
	<div>
		<frontend-header></frontend-header>
		<router-view></router-view>
		<frontend-footer></frontend-footer>
	</div>
</template>

<script>
import FrontendHeader from './frontendHeader.vue';
import FrontendFooter from './frontendFooter.vue';
export default { 
	components: { FrontendHeader, FrontendFooter } 
};
</script>

<style></style>
