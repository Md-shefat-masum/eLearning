<template>
	<section class="about" id="features">
		<!-- About Area Start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title extra">
						<h2 class="title font-bangla">ফ্রি কোর্স সমূহ</h2>
						<p class="font-bangla-nav">
							এই কোর্স গুলো সম্পূর্ণ বিনা মূল্যে এনরোল করতে পারবেন
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div
					v-for="crash_course in crash_courses"
					:key="crash_course.id"
					class="col-lg-4"
				>
					<div class="box" data-aos="fade-right">
						<div class="inner-box">
							<img
								class="rounded"
								:src="crash_course.full_thumbnail"
								alt=""
							/>
							<h4 class="title font-bangla">
								{{ crash_course.title }}
							</h4>
							<router-link
								to="/register"
								v-if="
									!get_check_auth_status &&
									crash_course.batch_students.length == 0
								"
								class="btn btn-info font-bangla-nav font-bold"
							>
								এনরোল করুন
							</router-link>

							<a
								href="#"
								v-if="
									get_check_auth_status &&
									crash_course.batch_students &&
									crash_course.batch_students.length == 0
								"
								@click.prevent="enroll_course(crash_course)"
								class="btn btn-info font-bangla-nav font-bold"
							>
								এনরোল করুন
							</a>
							<a
								:href="`/course-details/${
									crash_course.id
								}/${crash_course.title.toLocaleLowerCase()}`"
								@click.prevent="
									load_course_content(crash_course)
								"
								v-if="
									get_check_auth_status &&
									crash_course.batch_students &&
									crash_course.batch_students.length
								"
								class="btn btn-info font-bangla-nav font-bold"
							>
								কোর্স মডিউল দেখুন
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="border border mt-5 border-top-0 border-secondary"></div>
		</div>
		<!-- About Area End -->
	</section>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
	data: function () {
		return {
			crash_courses: [],
		};
	},
	created: function () {
		this.get_crash_courses();
		this.$watch("get_check_auth_status", function () {
			this.get_crash_courses();
		});
	},
	methods: {
		...mapActions(["fetch_course_content", "fetch_enroll_course"]),
		enroll_course: async function (course) {
			await this.fetch_enroll_course({ batch_id: course.id });
			this.load_course_content(course);
		},
		load_course_content: async function (course) {
			// batch_id = course.id
			await this.fetch_course_content({ batch_id: course.id });
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
		get_crash_courses: function () {
			// console.log(axios.defaults.headers.common.Authorization);
			let url = `/course/crash-courses`;
			let Authorization = null;
			if (this.get_check_auth_status) {
				url = `/course/auth/crash-courses`;
				Authorization = axios.defaults.headers.common.Authorization;
			}
			axios
				.get(url, {
					headers: {
						Authorization,
					},
				})
				.then((res) => {
					// console.log(res.data);
					this.crash_courses = res.data;
				});
		},
	},
	computed: {
		...mapGetters(["get_check_auth_status"]),
	},
};
</script>

<style></style>
