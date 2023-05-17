<template>
	<section class="about" id="modules">
		<!-- About Area Start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title extra">
						<h2 class="title font-bangla">স্টাডি প্লান</h2>
						<p class="font-bangla-nav">
							পুরো কোর্সটিকে আমরা 75 টি মডিউল এ ভাগ করেছি, প্রতিটি
							মডিউলের জন্য একটি করে লাইভ ক্লাস থাকবে
						</p>
					</div>
				</div>
			</div>
			<div class="row d-flex align-items-center milestone_segment">
				<div data-aos="fade-right" class="col-12 col-lg-6 segment_left">
					<img
						src="/assets/images/course-modules/web-design.png"
						alt=""
					/>
				</div>
				<div data-aos="fade-left" class="col-12 col-lg-6 segment_right">
					<h3 class="section_heading segment_heading">ওয়েব ডিজাইন</h3>
					<div class="modules">
						<div class="accordion" id="accordionExample">
							<div
								class="accordion-item milestone"
								v-for="(milestone, index) in webDesignModules.slice(0, 7)"
								:key="index"
							>
								<h2
									class="accordion-header"
									:id="'heading' + index"
								>
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										:data-bs-target="'#collapse' + index"
										aria-expanded="false"
										:aria-controls="'collapse' + index"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">{{
												milestone.id
											}}</span>
										</div>
										<div class="milestone-text">
											<span
												>Milestone
												{{ index + 1 }}:</span
											>
											{{ milestone.name }}
										</div>
									</button>
								</h2>
								<div
									:id="'collapse' + index"
									class="accordion-collapse collapse"
									:aria-labelledby="'heading' + index"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li
												v-for="(
													module, i
												) in milestone.modules"
												:key="i"
											>
												<span
													>মডিউল-{{ module.id }}</span
												>
												-
												{{ module.name }}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row d-flex align-items-center milestone_segment">
				<div
					data-aos="fade-right"
					class="col-12 col-lg-6 segment_right"
				>
					<h3 class="section_heading segment_heading">
						ব্যাকএন্ড ডেভলপমেন্ট
					</h3>
					<div class="modules">
						<div class="accordion" id="accordionExample">
							<div
								class="accordion-item milestone"
								v-for="(milestone, index) in webDesignModules.slice(7,20)"
								:key="index"
							>
								<h2
									class="accordion-header"
									:id="'heading' + index"
								>
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										:data-bs-target="'#collapse' + index"
										aria-expanded="false"
										:aria-controls="'collapse' + index"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">{{
												milestone.id
											}}</span>
										</div>
										<div class="milestone-text">
											<span
												>Milestone
												{{ index + 8 }}:</span
											>
											{{ milestone.name }}
										</div>
									</button>
								</h2>
								<div
									:id="'collapse' + index"
									class="accordion-collapse collapse"
									:aria-labelledby="'heading' + index"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li
												v-for="(
													module, i
												) in milestone.modules"
												:key="i"
											>
												<span
													>মডিউল-{{ module.id }}</span
												>
												-
												{{ module.name }}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div data-aos="fade-left" class="col-12 col-lg-6 segment_left">
					<img
						src="/assets/images/course-modules/back-end.png"
						alt=""
					/>
				</div>
			</div>

			<div class="row d-flex align-items-center milestone_segment">
				<div data-aos="fade-right" class="col-12 col-lg-6 segment_left">
					<img
						src="/assets/images/course-modules/front-end.png"
						alt=""
					/>
				</div>
				<div data-aos="fade-left" class="col-12 col-lg-6 segment_right">
					<h3 class="section_heading segment_heading">
						ফ্রন্টএন্ড ডেভেলপমেন্ট
					</h3>
					<div class="modules">
						<div class="accordion" id="accordionExample">
							<div
								v-for="(milestone, index) in webDesignModules.slice(20, webDesignModules.length)"
								:class="{'accordion-item milestone': milestone.name !== 'Bonus', 'bonus_milestone': milestone.name === 'Bonus'}"
								:key="index"
							>

								<h2
									class="accordion-header"
									:id="'heading' + index"
								>
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										:data-bs-target="'#collapse' + index"
										aria-expanded="false"
										:aria-controls="'collapse' + index"
										v-if="milestone.name !== 'Bonus'"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">{{
												milestone.id
											}}</span>
										</div>
										<div class="milestone-text">
											<span
												>Milestone
												{{ index + 21 }}:</span
											>
											{{ milestone.name }}
										</div>
									</button>
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										:data-bs-target="'#collapse' + index"
										aria-expanded="false"
										:aria-controls="'collapse' + index"
										v-if="milestone.name === 'Bonus'"
									>
										<div class="milestone-text">
											Bonus Milestone
										</div>
									</button>
								</h2>
								<div
									:id="'collapse' + index"
									class="accordion-collapse collapse"
									:aria-labelledby="'heading' + index"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li
												v-for="(
													module, i
												) in milestone.modules"
												:key="i"
											>
												<span
													>মডিউল-{{ module.id }}</span
												>
												-
												{{ module.name }}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- About Area End -->
	</section>
</template>

<script>
import webDesignModules from "./webDesignModules";
const calculateCourseModules = () => {
	// let totalModules;
	const moduleArray = webDesignModules.map((milestone) => milestone.modules);
	const modules = moduleArray.map((module) => module);
	console.log(modules);
};
export default {
	data: function () {
		return {
			webDesignModules,
			totalModules: calculateCourseModules(),
		};
	},
};
</script>

<style></style>
