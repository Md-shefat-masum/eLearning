<template>
	<section class="mt-5 py-5">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-4">
					<div class="card bg-light-dark">
						<div class="card-body">
							<ul class="profile_link">
								<li>
									<div class="img">
										<img
											:src="user.photo"
											class="img-thumbnail"
											alt=""
										/>
									</div>
								</li>
								<li class="active">
									<a
										href="#"
										class="active"
										style="color: rgb(78, 180, 207)"
									>
										<i class="fa fa-user"></i>
										My Profile
									</a>
								</li>
								<!-- <li>
									<a
										href="https://techparkit.org/dashboard/profile/address"
									>
										<i class="icofont icofont-building-alt"></i>
										Address
									</a>
								</li>
								<li>
									<a
										href="https://techparkit.org/dashboard/profile/education"
									>
										<i class="icofont icofont-education"></i>
										Education
									</a>
								</li>
								<li>
									<a
										href="https://techparkit.org/dashboard/profile/job_profile"
									>
										<i class="icofont icofont-graduate-alt"></i>
										Job Profile
									</a>
								</li>
								<li>
									<a
										href="https://techparkit.org/dashboard/profile/job_experience"
									>
										<i
											class="icofont icofont-brainstorming"
										></i>
										Job Experience
									</a>
								</li>
								<li>
									<a
										href="https://techparkit.org/dashboard/profile/skill_set"
									>
										<i
											class="icofont icofont-chart-bar-graph"
										></i>
										Skill Set
									</a>
								</li>
								<li>
									<a
										href="https://techparkit.org/dashboard/profile/important_links"
									>
										<i class="icofont icofont-chart-flow"></i>
										Important Links
									</a>
								</li>
								<li>
									<a
										href="https://techparkit.org/dashboard/profile/job_application"
									>
										<i
											class="icofont icofont-chart-pie-alt"
										></i>
										Job Application
									</a>
								</li>
								<li>
									<a
										href="https://techparkit.org/dashboard/profile/cirtification"
									>
										<i class="icofont icofont-contact-add"></i>
										Cirtification
									</a>
								</li> -->
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<div class="card bg-light-dark">
						<div class="card-body">
							<form
								@submit.prevent="update_profile($event.target)"
								class=""
								action="#"
								enctype="multipart/form-data"
								method="POST"
							>
								<div class="form-group mb-3">
									<label for="first_name">First name</label>
									<input
										type="text"
										:value="user.first_name"
										id="first_name"
										name="first_name"
										class="form-control"
									/>
								</div>
								<div class="form-group mb-3">
									<label for="last_name">Last name</label>
									<input
										type="text"
										:value="user.last_name"
										id="last_name"
										name="last_name"
										class="form-control"
									/>
								</div>
								<div class="form-group mb-3">
									<label for="username">User Name</label>
									<input
										type="text"
										:value="user.username"
										id="username"
										name="username"
										class="form-control"
									/>
								</div>
								<div class="form-group mb-3">
									<label for="phone">Phone</label>
									<input
										type="text"
										:value="user.phone"
										id="phone"
										name="phone"
										class="form-control"
									/>
								</div>
	
								<div class="form-group mb-3">
									<label for="photo">photo</label>
									<br />
									<img
										:src="user.photo"
										class="my-2"
										style="height: 50px"
										id="preview_image"
									/>
									<br />
									<input
										type="file"
										onchange="preview_image.src= event.target?.files?.length &amp;&amp; window.URL.createObjectURL(event.target?.files[0])"
										class="form-control"
										name="photo"
										accept=".jpg,.jpeg,.png"
									/>
								</div>
								<div class="form-group mb-3">
									<button type="submit" class="btn btn-secondary">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
	created: function () {},
	methods: {
		...mapActions(["update_profile"]),
		...mapMutations(["set_logout"]),
		logout: function () {
			if (window.confirm("sure want to logout?")) {
				this.set_logout();
			}
		},
	},
	computed: {
		...mapGetters([
			"get_auth_info",
			"get_profile_photo_url",
		]),
		user: function () {
			return {
				...this.get_auth_info,
				photo: this.get_profile_photo_url,
			};
		},
	},
};
</script>

<style></style>
