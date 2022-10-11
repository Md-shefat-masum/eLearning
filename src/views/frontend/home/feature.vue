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
						<p>
							এই প্রজেক্ট গুলো আমাদের সাহায্য নিয়ে আপনারা নিজেরাই করবেন
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="project_list">
						<div class="item" v-for="i in 10" :key="i">
							<div class="img" data-aos="fade-up" :style="`background-image: url('assets/images/projects/assignment${i}.png');`">
								<!-- <img :src="`assets/images/projects/assignment${i}.png`" alt=""> -->
							</div>
						</div>
						<div class="item" v-for="i in 16" :key="i">
							<div class="img" data-aos="fade-up" :style="`background-image: url('assets/images/projects/project${i}.png');`">
								<!-- <img :src="`assets/images/projects/project${i}.png`" alt=""> -->
							</div>
						</div>
						<div class="item" data-aos="fade-up" v-for="i in [24,25,26,27]" :key="i">
							<div class="img" :style="`background-image: url('assets/images/projects/project${i}.png');`">
								<!-- <img :src="`assets/images/projects/project${i}.png`" alt=""> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Service Area End -->
	</section>
</template>

<script>
export default {};
</script>

<style></style>
