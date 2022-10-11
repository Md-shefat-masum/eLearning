<template>
	<section class="whaybest" id="modules">
		<!-- We are best Area Start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title extra">
						<h2 class="title font-bangla">
							কোর্স মডিউলে যা কিছু থাকছে
						</h2>
						<p class="font-bangla-nav">
							৮৪ টি মডিউলে সাজানো হয়েছে কোর্সটি
						</p>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-7">
					<div class="module_list_body">
						<div class="module_list">
							<div v-for="i in 20" :key="i" class="item">
								<div class="no">{{ i }}</div>
								<h4 class="title">Introduction tuto</h4>
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
export default {};
</script>

<style></style>
