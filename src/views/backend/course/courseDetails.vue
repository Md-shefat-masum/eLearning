<template>
	<section class="my-5 py-5">
		<div class="container">
			<div class="card shadow-0 border border-1 bg_deep_dark">
				<div class="card-body">
					<div class="row">
						<div class="col-lg-6 col-xl-8">
							<div
								class="iframe-parent-class"
								style="height: auto"
							>
								<iframe
									id="video_player"
									class="iframe_player"
									src="https://www.youtube.com/embed/Bn3A2C68bvU?autoplay=0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen=""
								>
								</iframe>
							</div>
						</div>

						<div class="col-lg-6 col-xl-4">
							<div class="course_details_content custom_scroll2">
								<ul class="course_outline">
									<li>
										<h5>personal portfolio</h5>
									</li>
									<li>
										<ul class="week_list_body">
											<li>
												<h6>week 1</h6>
											</li>
											<li>
												<ul class="module_list_body">
													<li
														class="module_name"
														data-toggle_target=".list_module_1"
													>
														<a href="#">
															episode-1, Learn and
															Explore HTML as a
															Beginner
														</a>
													</li>
													<li
														class="module_list_items list_module_1"
													>
														<ul>
															<li
																class="video_link_li"
															>
																<i
																	class="fa fa-check-circle-o watched yes"
																></i>
																<a
																	class="video_link_btn"
																	data-video_link="https://www.youtube.com/embed/R_KTQg4sW7o?autoplay=1"
																	data-conent_type="video"
																	data-class_module_video_id="1"
																	href="#"
																>
																	1-1 Module
																	Introduction
																	And
																	First-Ever
																	Website
																</a>
															</li>

															<li
																class="video_link_li"
															>
																<i
																	class="fa fa-check-circle-o watched yes"
																></i>
																<a
																	class="quiz_btn"
																	data-module_related_quiz_id="1"
																	data-id="1"
																	href="#"
																>
																	Quiz-1 :
																	html
																</a>
															</li>

															<li
																class="video_link_li"
															>
																<i
																	class="fa fa-circle-o watched not"
																></i>
																<a
																	href="#"
																	data-id="1"
																	class="project_btn"
																>
																	Project-1 :
																	make a
																	website
																	using html
																	tag
																</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li class="video_link_li mb-3 ms-3">
												<i
													class="fa fa-circle-o watched not"
												></i>
												<a
													class="assignment_btn"
													data-assignment_no="1"
													data-class_module_video_id="1"
													href="#"
												>
													Assignment-1 : company
													website
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>

						<div class="col-12"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style></style>
