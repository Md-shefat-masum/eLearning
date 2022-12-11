<template>
	<section class="whaybest" id="modules">
		<!-- We are best Area Start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title extra">
						<h2 class="title font-bangla">
							REACT JS কোর্স মডিউলে যা কিছু থাকছে
						</h2>
						<p class="font-bangla-nav">
							{{reactModule.length}} টি মডিউলে সাজানো হয়েছে কোর্সটি
						</p>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-7">
					<div class="module_list_body">
						<div class="module_list">
							
							<div v-if="reactModule.length">
								<div
									v-for="(item, index) in reactModule"
									:key="index"
									class="item"
								>
									<div class="no">{{ index + 1 }}</div>
									<h4 class="title">{{ item }}</h4>
								</div>
							</div>

							<div
								v-else
								v-for="(item, index) in 20"
								:key="item"
								class="item"
							>
								<div class="no">{{ index + 1 }}</div>
								<h4 class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quidem!</h4>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-5 flex_full_center">
					<div class="module_image" style="background-image: url('/assets/images/modules.png');">
						<!-- <img src="assets/images/modules.png" alt=""> -->
					</div>
				</div>
			</div>
		</div>
		<!--We are best Area Start -->

		<!-- We are best Area Start -->
		<div class="container mt-5 pt-5">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title extra">
						<h2 class="title font-bangla">
							PHP with LARAVEL কোর্স মডিউলে যা কিছু থাকছে
						</h2>
						<p class="font-bangla-nav">
							{{phpModule.length}} টি মডিউলে সাজানো হয়েছে কোর্সটি
						</p>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-5 flex_full_center">
					<div class="module_image" style="background-image: url('/assets/images/modules.png');">
						<!-- <img src="assets/images/modules.png" alt=""> -->
					</div>
				</div>

				<div class="col-lg-7">
					<div class="module_list_body">
						<div class="module_list">
							
							<div v-if="phpModule.length">
								<div
									v-for="(item, index) in reactModule"
									:key="index"
									class="item"
								>
									<div class="no">{{ index + 1 }}</div>
									<h4 class="title">{{ item }}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<!--We are best Area Start -->
	</section>
</template>

<script>
import reactModule from "./courseModulesJS";
import phpModule from "./courseModulesPHP";
export default {
	data: function () {
		return {
			modules: [],
			reactModule,
			phpModule,
		};
	},
	created: function () {
		this.get_modules();
	},
	methods: {
		get_modules: function () {
			fetch("https://techparkit.org/api/v1/course-module")
				.then((res) => res.json())
				.then((res) => {
					this.modules = res;
				});
		},
	},
};
</script>

<style></style>
