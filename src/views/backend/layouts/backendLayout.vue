<template>
	<div>
		<backend-header></backend-header>
		<router-view></router-view>
		<backend-footer></backend-footer>
	</div>
</template>

<script>
import BackendHeader from './backendHeader.vue';
import BackendFooter from './backendFooter.vue';
export default { 
	components: { BackendHeader, BackendFooter } 
};
</script>

<style></style>
