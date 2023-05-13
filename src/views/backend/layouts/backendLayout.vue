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
import { mapGetters } from 'vuex';
export default { 
	components: { 
		BackendHeader, 
		BackendFooter
 }, 
	watch: {
		get_check_auth_status: {
			handler: function(){
				this.check_auth();
				
			}
		}
	},
	created: function(){
		this.check_auth();
	},
	methods: {
		check_auth: async function(){
			if(!this.get_check_auth_status && !window.localStorage.token){
				this.$router.replace('/login');
			}
		}
	},
	computed: {
		...mapGetters(["get_check_auth_status"])
	}
};
</script>

<style></style>
