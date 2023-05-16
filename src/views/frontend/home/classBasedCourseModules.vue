<template>
	<section class="about" id="features">
		<!-- About Area Start -->
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8">
					<div class="section-title extra">
						<h2 class="title font-bangla">স্টাডি প্লান</h2>
						<p class="font-bangla-nav">
							পুরো কোর্সটিকে আমরা 75 টি
							মডিউল এ ভাগ করেছি, প্রতিটি মডিউলের জন্য একটি করে
							লাইভ ক্লাস থাকবে
						</p>
					</div>
				</div>
			</div>
			<div class="row d-flex align-items-center">
				<div data-aos="fade-right" class="col-12 col-lg-6 segment_left">
					<img src="/assets/images/web-design-2.png" alt="" />
				</div>
				<div data-aos="fade-left" class="col-12 col-lg-6 segment_right">
					<h3 class="section_heading">
						ওয়েব ডিজাইন 
					</h3>
					<div class="modules">
						<div class="accordion" id="accordionExample">
								<div
									v-for="(milestone, index) in webDesignModules"
									:key="index"
									class="item"
								>
								<div class="accordion-item milestone">
								<h2 class="accordion-header" :id="'heading' + index">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										:data-bs-target="'#collapse' + index"
										aria-expanded="false"
										:aria-controls="'collapse'+index"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">{{ milestone.id }}</span>
										</div>
										<div class="milestone-text">
											<span>Milestone {{ index + 1 }}:</span> {{ milestone.name }}
										</div>
									</button>
								</h2>
								<div
									:id="'collapse'+ index"
									class="accordion-collapse collapse"
									:aria-labelledby="'heading' + index"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul 									
											v-for="(module, i) in milestone.modules"
											:key="i"
										>
											<li>
												<span>মডিউল-{{ module.id }}</span> -
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

			<div class="row d-flex align-items-center">
				<div
					data-aos="fade-right"
					class="col-12 col-lg-6 segment_right"
				>
					<div class="num_shape">
						<img src="/assets/images/shape-1.png" alt="" />
						<span class="shape">২</span>
					</div>
					<h3 class="section_heading">ব্যাকএন্ড ডেভলপমেন্ট</h3>
					<div class="modules">
						<div class="accordion" id="accordionExample">
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingOne">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="false"
										aria-controls="collapseOne"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">১</span>
										</div>
										<div class="milestone-text">
											<span>Milestone 1:</span> Build a
											Personal Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseOne"
									class="accordion-collapse collapse"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingTwo">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">২</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-২ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseTwo"
									class="accordion-collapse collapse"
									aria-labelledby="headingTwo"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingThree">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">৩</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-৩ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseThree"
									class="accordion-collapse collapse"
									aria-labelledby="headingThree"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingFour">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFour"
										aria-expanded="false"
										aria-controls="collapseFour"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">৪</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-৪ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseFour"
									class="accordion-collapse collapse"
									aria-labelledby="headingFour"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingFIve">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFive"
										aria-expanded="false"
										aria-controls="collapseFive"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">৫</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-৫ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseFive"
									class="accordion-collapse collapse"
									aria-labelledby="headingFive"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingSix">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseSix"
										aria-expanded="false"
										aria-controls="collapseSix"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">৬</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-৬ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseSix"
									class="accordion-collapse collapse"
									aria-labelledby="headingSix"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingSeven">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseSeven"
										aria-expanded="false"
										aria-controls="collapseSeven"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">৭</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-৭ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseSeven"
									class="accordion-collapse collapse"
									aria-labelledby="headingSeven"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingEight">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseEight"
										aria-expanded="false"
										aria-controls="collapseEight"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">৮</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-৮ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseEight"
									class="accordion-collapse collapse"
									aria-labelledby="headingEight"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingNine">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseNine"
										aria-expanded="false"
										aria-controls="collapseNine"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">৯</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-৯ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseNine"
									class="accordion-collapse collapse"
									aria-labelledby="headingNine"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingTen">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTen"
										aria-expanded="false"
										aria-controls="collapseTen"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">১০</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-১০ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseTen"
									class="accordion-collapse collapse"
									aria-labelledby="headingTen"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingEleven">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseEleven"
										aria-expanded="false"
										aria-controls="collapseEleven"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">১১</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-১১ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseEleven"
									class="accordion-collapse collapse"
									aria-labelledby="headingEleven"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="accordion-item milestone">
								<h2 class="accordion-header" id="headingTwelve">
									<button
										class="accordion-button milestone-heading collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwelve"
										aria-expanded="false"
										aria-controls="collapseTwelve"
									>
										<div class="module_shape">
											<img
												src="/assets/images/shape-1.png"
												alt=""
											/>
											<span class="shape">১২</span>
										</div>
										<div class="milestone-text">
											মাইলস্টোন-১২ || Build a Personal
											Portfolio & Deployment
										</div>
									</button>
								</h2>
								<div
									id="collapseTwelve"
									class="accordion-collapse collapse"
									aria-labelledby="headingTwelve"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body milestone-body">
										<ul>
											<li>
												<span>মডিউল-১</span> -
												Introduction, Web & Internet
												Fundamental
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-২</span> - HTML,
												Everything needs to be learned
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৩</span> - CSS
												Basics
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৪</span> - Css
												Layout
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৫</span> -
												Responsive Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৬</span> - Portfolio
												Design
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৭</span> - Learn Git
												& GitHub, Version Controlling &
												Deployment
											</li>
											<!-- <hr /> -->
											<li>
												<span>মডিউল-৮</span> -
												Assignment 01
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div data-aos="fade-left" class="col-12 col-lg-6 segment_left">
					<img src="/assets/images/backend.png" alt="" />
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
