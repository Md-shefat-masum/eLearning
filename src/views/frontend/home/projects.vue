<template>
	<section class="feature" id="feature">
		<!-- Service Area start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title">
						<h2 class="title font-bangla">
							কোর্সে যে প্রজেক্ট গুলো করানো হবে
						</h2>
						<p class="font-bangla-p">
							এই প্রজেক্ট গুলো আমাদের সাহায্য নিয়ে আপনারা নিজেরাই
							করবেন
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="project_list">
						<div class="item" v-for="i in show_list" :key="i">
							<div
								class="img"
								data-aos="fade-up"
								:style="`background-image: url('assets/images/projects/${i.image_source}');`"
							>
								<!-- <img :src="`assets/images/projects/assignment${i}.png`" alt=""> -->
							</div>
						</div>
					</div>
					<!-- <div class="project_list">
						<div class="item" v-for="i in 16" :key="i">
							<div class="img" data-aos="fade-up" :style="`background-image: url('assets/images/projects/project${i}.png');`">
							</div>
						</div>
						<div class="item" data-aos="fade-up" v-for="i in [24,25,26,27]" :key="i">
							<div class="img" :style="`background-image: url('assets/images/projects/project${i}.png');`">
							</div>
						</div> 
					</div>-->
					<div v-if="show_list.length != project_list.length" class="text-center mt-4" data-aos="fade-up">
						<button class="btn btn-primary" @click.prevent="load_more(this.show_list.length+6)">
							<i class="fa fa-recycle text-dark"></i> Load More
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Service Area End -->
	</section>
</template>

<script>
export default {
	created: function () {
		this.make_project_list();
	},
	data: function () {
		return {
			show_list: [],
			project_list: [],
		};
	},
	methods: {
		make_project_list: function(){
			for (let i = 1; i <= 10; i++) {
				this.project_list.push({
					image_source: `assignment${i}.png`,
				});		
			}
			for (let i = 10; i <= 16; i++) {
				this.project_list.push({
					image_source: `project${i}.png`,
				});		
			}
			for (let i = 24; i <= 27; i++) {
				this.project_list.push({
					image_source: `project${i}.png`,
				});		
			}

			this.load_more(6);
		},
		load_more: function (range_end) {
			for (let index = this.show_list.length; index < range_end; index++) {
				if(this.project_list[index]){
					this.show_list.push(this.project_list[index]);
				}
			}
		},
	},
};
</script>

<style></style>
