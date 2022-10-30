<template>
	<section>
		<div class="container mt-5 py-5">
			<h2 class="text-center mb-5">My Courses</h2>
			<div class="course_list">
				<!-- <div class="course_item">
					<div class="left">
						<img src="assets/images/blog/img4.png" alt="" />
					</div>
					<div class="right">
						<h2>HTML CSS crush course</h2>
						<h3>Muhammad Shefat Ullah</h3>
						<div class="progress_body">
							<div class="progress_bar">
								<div class="progress_fill"></div>
							</div>
							<div class="percent">0%</div>
						</div>
						<a href="#" class="mybtn3 mybtn-light">
							<span class="days"></span><span>:</span>
							<span class="hours"></span><span>:</span>
							<span class="minutes"></span><span>:</span>
							<span class="seconds"></span>
							<span>Days</span>
						</a>
					</div>
				</div> -->
				<div
					class="course_item"
					v-for="course in get_user_courses"
					:key="course.id"
				>
					<div class="left">
						<!-- <img src="assets/images/blog/img4.png" alt="" /> -->
						<img :src="course.thumbnail" alt="" />
					</div>
					<div class="right">
						<h2>{{ course.title }}</h2>
						<h3>{{ course.instructor.username }}</h3>
						<div class="progress_body">
							<div class="progress_bar">
								<div :style="`width: ${course.avg}%`" class="progress_fill"></div>
							</div>
							<div class="percent">{{course.avg}}%</div>
						</div>
						<ul class="task_report">
							<li>
								<i class="fa fa-video"></i> 
								<span class="task_name">video watched:</span> 
								<span class="avg">{{course.total_videos_complete}} / {{course.total_videos}}</span> 
							</li>
							<li>
								<i class="fa fa-cubes"></i> 
								<span class="task_name">quiz completed:</span> 
								<span class="avg">{{course.total_quizes_complete}} / {{course.total_quizes}}</span>
							</li>
							<li>
								<i class="fa fa-tasks"></i> 
								<span class="task_name">project submitted:</span> 
								<span class="avg">{{course.total_projects_complete}} / {{course.total_projects}}</span>
							</li>
							<li>
								<i class="fa fa-project-diagram"></i> 
								<span class="task_name">Assignment submitted:</span>  
								<span class="avg">{{course.total_assignments_complete}} / {{course.total_assignments}}</span>
							</li>
						</ul>
						<a
							:href="`/course-details/${course.id}/${course.title.toLocaleLowerCase()}`"
							@click.prevent="load_course_content(course)"
							class="mybtn3 mybtn-light"
						>
							<span>Continue Course</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	created: function () {
		setTimeout(() => {
			// this.countDownClock(50, "hours");
		}, 500);
		this.fetch_user_courses();
	},
	methods: {
		...mapActions(["fetch_user_courses", "fetch_course_content"]),
		load_course_content: async function (course) {
			// batch_id = course.id
			await this.fetch_course_content({batch_id: course.id});
			this.$router.push({
				name: "dashboardCourseDetails",
				params: { 
					slug: this.convertToSlug(course.title),
					id: course.id,
				},
			});
		},
		convertToSlug: function (Text) {
			return Text.toLowerCase()
				.replace(/ /g, "-")
				.replace(/[^\w-]+/g, "");
		},
		countDownClock: function (number = 100, format = "seconds") {
			const d = document;
			const daysElement = d.querySelector(".days");
			const hoursElement = d.querySelector(".hours");
			const minutesElement = d.querySelector(".minutes");
			const secondsElement = d.querySelector(".seconds");

			let countdown;
			convertFormat(format);

			function convertFormat(format) {
				switch (format) {
					case "seconds":
						return timer(number);
					case "minutes":
						return timer(number * 60);
					case "hours":
						return timer(number * 60 * 60);
					case "days":
						return timer(number * 60 * 60 * 24);
				}
			}

			function timer(seconds) {
				const now = Date.now();
				const then = now + seconds * 1000;

				countdown = setInterval(() => {
					const secondsLeft = Math.round((then - Date.now()) / 1000);

					if (secondsLeft <= 0) {
						clearInterval(countdown);
						return;
					}

					displayTimeLeft(secondsLeft);
				}, 1000);
			}

			function displayTimeLeft(seconds) {
				daysElement.innerHTML = Math.floor(seconds / 86400);
				hoursElement.innerHTML = Math.floor((seconds % 86400) / 3600);
				minutesElement.innerHTML = Math.floor(
					((seconds % 86400) % 3600) / 60
				);
				secondsElement.innerHTML =
					seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
			}
		},
	},
	computed: {
		...mapGetters(["get_user_courses"]),
	},
};
</script>

<style></style>
