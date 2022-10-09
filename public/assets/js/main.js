$(function ($) {
	"use strict";

	init_pointer({});
	var $window = $(window);

	window.homePagePlugins = function () {
		// magnific popup activation
		$(".video-play-btn").magnificPopup({
			type: "video",
		});

		$(".img-popup").magnificPopup({
			type: "image",
		});

		// testimonial-slider
		var $testimonialSlider = $(".testimonial-slider");
		$testimonialSlider.owlCarousel({
			loop: true,
			navText: [
				'<i class="fa fa-angle-left"></i>',
				'<i class="fa fa-angle-right"></i>',
			],
			nav: true,
			dots: false,
			animateOut: "fadeOut",
			animateIn: "fadeIn",
			autoplayTimeout: 6000,
			smartSpeed: 1200,
			responsive: {
				0: {
					items: 1,
				},
				576: {
					items: 1,
				},
				950: {
					items: 1,
				},
				960: {
					items: 1,
				},
				1200: {
					items: 1,
				},
			},
		});

		

		// twitte-slider
		var $twitte_slider = $(".twitte-slider");
		$twitte_slider.owlCarousel({
			loop: true,
			nav: true,
			navText: [
				'<i class="fa fa-angle-left"></i>',
				'<i class="fa fa-angle-right"></i>',
			],
			dots: false,
			margin: 30,
			autoplay: true,
			center: true,
			autoplayTimeout: 2500,
			smartSpeed: 1500,
			responsive: {
				0: {
					items: 1,
				},
				576: {
					items: 1,
				},
			},
		});
	};

	window.allPagePlugins = function () {
		/* Offset start */
		// Click To Scroll
		var $window = $(window),
			$body = $("body");

		$(".navigation .navbar-nav a").on("click", function (event) {
			// var $anchor = $(this);
			// console.log($($anchor.attr("href")));
			// if ($($anchor.attr("href")).length) {
			// 	$("html, body")
			// 		.stop()
			// 		.animate(
			// 			{
			// 				scrollTop:
			// 					$($anchor.attr("href")).offset().top - 80,
			// 			},
			// 			1000
			// 		);
			// 	event.preventDefault();
			// }
		});

		// Navbar collapse on click
		$(".nav-link").on("click", function () {
			$(".navbar-collapse").collapse("hide");
		});

		// bottom to top js start
		var html_body = $("html, body");
		var amountScrolled = 300;
		var bootomclass = $(".bottomtotop");
		bootomclass.hide();
		$window.on("scroll", function () {
			// if ($window.scrollTop() > amountScrolled) {
			// 	bootomclass.fadeIn("slow");
			// } else {
			// 	bootomclass.fadeOut("slow");
			// }
			// if ($(".navigation").offset().top > 0) {
			// 	$(".navigation").addClass("stiky-nav");
			// } else {
			// 	$(".navigation").removeClass("stiky-nav");
			// }
		});

		bootomclass.on("click", function () {
			html_body.animate(
				{
					scrollTop: 0,
				},
				600
			);
			return false;
		});

		//scrollspy menu
		$body.scrollspy({
			target: "#mainmenu",
			offset: 100,
		});

		//Aos Active js
		AOS.init({
			easing: "ease-out-back",
			duration: 1000,
		});
	};

	window.allPagePlugins();
	window.homePagePlugins();

	//  preloader js start
	$window.on("load", function () {
		setTimeout(function () {
			$("#preloader").fadeOut("slow", function () {});
		}, 600);
	});
});
