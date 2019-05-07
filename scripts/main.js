'use strict';

// ready
$(document).ready(function () {

	// scrollToTop
	$('.scrollup').fadeOut(500);
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scrollup').fadeIn(500);
		} else {
			$('.scrollup').fadeOut(500);
		}
	});
	$('.scrollup').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	// scrollToTop

	// adaptive menu
	$('.main-nav--js').click(function () {
		$('nav.mobilenav').toggleClass('active');
		return false;
	});
	$('.close-nav--js').click(function () {
		$(this).closest('.mobilenav').removeClass('active');
		return false;
	});
	$(document).on('click', function (e) {
		if (!$(e.target).closest(".mobilenav").length) {
			$('.mobilenav').removeClass('active');
		}
		e.stopPropagation();
	});
	$('.main-footer--js').click(function () {
		$(this).parent().next().toggleClass('active');
		return false;
	});
	$('.link-overflow').click(function () {
		$(this).hide();
		$(this).prev().addClass('active');
		return false;
	});
	// adaptive menu

	// mask phone {maskedinput}
	$("[name=phone]").mask("+7(999)999-99-99", { placeholder: " " });
	// mask phone

	// slider
	var mySwiper = new Swiper('.swiper', {
		slidesPerView: 3,
		spaceBetween: 60,
		navigation: {
			nextEl: '.swiper-btn-next-r',
			prevEl: '.swiper-btn-prev-r'
		},
		breakpoints: {
			1000: {
				spaceBetween: 40,
				slidesPerView: 2
			},
			600: {
				slidesPerView: 'auto',
				spaceBetween: 20
			}
		}
	});
	var mySwiperEmp = new Swiper('.swiper-employee', {
		slidesPerView: 3,
		spaceBetween: 60,
		navigation: {
			nextEl: '.swiper-btn-next-e',
			prevEl: '.swiper-btn-prev-e'
		},
		breakpoints: {
			1000: {
				spaceBetween: 40,
				slidesPerView: 2
			},
			600: {
				slidesPerView: 1
			}
		}
	});
	var projectSlider = new Swiper('.swiper-project', {
		slidesPerView: 'auto',
		spaceBetween: 60,
		navigation: {
			nextEl: '.swiper-btn-next-p',
			prevEl: '.swiper-btn-prev-p'
		},
		breakpoints: {
			600: {
				spaceBetween: 20
			}
		}
	});
	var aboutSlider = new Swiper('.swiper-about', {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-btn-next-p',
			prevEl: '.swiper-btn-prev-p'
		}
	});
	var galleryTop = new Swiper('.swiper-news', {
		spaceBetween: 10,
		autoplay: true,
		pagination: {
			clickable: true,
			el: '.swiper-pagination'
		}
	});
	var swiper = new Swiper('.swiper-client', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 60,
		navigation: {
			nextEl: '.swiper-btn-next-c',
			prevEl: '.swiper-btn-prev-c'
		},
		breakpoints: {
			1200: {
				spaceBetween: 40,
				slidesPerView: 2
			},
			600: {
				spaceBetween: 30,
				slidesPerView: 1
			}
		}
	});
	// slider

	// type file
	$(function () {
		var inner = $('.file_upload .innerTxt');
		var wrapper = $(".file_upload"),
		    inp = wrapper.find("input");
		var file_api = window.File && window.FileReader && window.FileList && window.Blob ? true : false;
		inp.change(function () {
			var file_name = undefined;
			if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name;else file_name = inp.val().replace("C:\\fakepath\\", '');
			if (!file_name.length) return;
			inner.text(file_name);
			wrapper.addClass('active');
		}).change();
	});
	// type file

	// popup {magnific-popup}
	$('.popup-modal').magnificPopup({
		type: 'inline'
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function opener(element) {
				return element.find('img');
			}
		}
	});
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	// popup

	//videoTabs
	var videoTabs = '.videotabs ul.tabs__caption';
	var directionTabs = '.directions ul.tabs__caption';
	if ($('.videotabs').length) {
		setTimeout(function () {
			var tab_color = $(videoTabs + ' li.active').attr('data-color');
			var positionLeft = $(videoTabs + ' li.active').position().left;
			var widthEl = $(videoTabs + ' li.active').width();
			$('.tabs-inner .line').css('left', positionLeft);
			$('.tabs-inner .line').css('width', widthEl);
			$('.tabs-inner .line').css('background', tab_color);
		}, 1000);
	}
	function videoTabsFunc(elem, mainClass) {
		var tab_id = $(elem).attr('data-tab');
		$(mainClass + ' ul.tabs__caption li').removeClass('active');
		$(mainClass + ' .tabs__content').removeClass('active');
		$(elem).addClass('active');
		$("#" + tab_id).addClass('active');

		if (mainClass === '.directions') {
			var dataTitle = $(elem).attr('data-title');
			$(mainClass + ' .aos-init').removeClass('aos-animate');
			$(mainClass).find('h2 + h2').text(dataTitle);
			setTimeout(function () {
				$("#" + tab_id).find('.aos-init').addClass('aos-animate');
			}, 100);
		}

		if (mainClass === '.videotabs') {
			var tab_color = $(elem).attr('data-color');
			var tabVideo = $(elem).attr('data-video');
			var btnLink = $(elem).attr('data-link');
			var positionLeft = $(elem).position().left;
			var widthEl = $(elem).width();
			$(mainClass + ' .aos-init').removeClass('aos-animate');
			$(mainClass).find('.container').addClass('aos-animate');

			$('.tabs-inner .line').css('left', positionLeft);
			$('.tabs-inner .line').css('width', widthEl);
			$('.tabs-inner .line').css('background', tab_color);
			$('.video--js').attr('src', tabVideo);
			$('.videotabs a').attr('href', btnLink);
		}
	}
	$('.video--js').on('ended', function () {
		var activeTab = $(videoTabs + ' li.active');
		var mainLi = activeTab.is(':last-child') ? $(videoTabs + ' li').first() : activeTab.next();
		videoTabsFunc(mainLi, '.videotabs');
	});
	$(videoTabs + ' li').click(function () {
		videoTabsFunc(this, '.videotabs');
	});
	$(directionTabs + ' li').click(function () {
		videoTabsFunc(this, '.directions');
	});
	$('.about-tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');
		var positionLeft = $(this).position().left;
		var widthEl = $(this).width();
		$('ul.tabs__caption li').removeClass('active');
		$('.tabs__content').removeClass('active');
		$(this).addClass('active');
		$('.tabs-inner .line').css('left', positionLeft);
		$('.tabs-inner .line').css('width', widthEl);
		$("#" + tab_id).addClass('active');
	});
	//videoTabs

	//isotop
	var $grid = $('.grid');
	$grid.imagesLoaded(function () {
		// setTimeout(function () {
		$grid.isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer'
			}
		});
		// }, 1000);
	});
	$('#filters').on('click', 'li', function () {
		$('.grid-item').find('.aos-init').removeClass('aos-animate');
		$('#filters li').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).data('filter');
		$grid.isotope({ filter: filterValue });
		$(filterValue).find('.aos-init').addClass('aos-animate');
	});
	$('.showmore--js').click(function () {
		$(this).hide();
		$('div').removeClass('hidden-content');
		$grid.isotope('layout');
		return false;
	});
	//isotop
	$('.shownext--js').click(function () {
		$(this).hide();
		$(this).prev().slideDown();
		return false;
	});
	$('.hidenext--js').click(function () {
		$('.shownext--js').show();
		$(this).closest('.hide').slideUp();
		return false;
	});
	$('.showBtn--js').click(function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).text('Смотреть на карте');
		} else {
			$(this).addClass('active');
			$(this).text('Свернуть');
		}
		$(this).prev().slideToggle();
		return false;
	});

	//accordion
	$('.toggle').click(function (e) {
		e.preventDefault();

		var $this = $(this);

		if ($this.next().hasClass('show')) {
			$this.removeClass('show');
			$this.next().removeClass('show');
			$this.next().slideUp(0, layoutIsotope);
		} else {
			$this.parent().parent().find('li .inner').removeClass('show');
			$this.parent().parent().find('li .inner').slideUp(0, layoutIsotope);
			$this.toggleClass('show');
			$this.next().toggleClass('show');
			$this.next().slideToggle(0, layoutIsotope);
		}
	});
	function layoutIsotope() {
		$grid.isotope('layout');
	}
	//accordion

	// animation
	AOS.init({
		once: true
	});
	// animation
});
// ready

function initMap() {
	var markers = [];
	var locations = [[59.91701049, 30.31812429], [59.91916157, 30.3251195], [59.91756978, 30.31812429], [59.92049517, 30.33250093], [59.91701049, 30.3276515]];
	var hrefId = ['object1', 'object2', 'object3', 'object4', 'object5'];

	var mapOptions = {
		center: new google.maps.LatLng(59.91916157, 30.3251195),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		zoomControl: true,
		scrollwheel: false
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);

	// const infowindow = new google.maps.InfoWindow();

	var marker = undefined,
	    i = undefined;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][0], locations[i][1]),
			map: map,
			icon: "images/icons/mark.png"
		});
		marker.set('data-href', hrefId[i]);
		markers.push(marker);
		// google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
		// 	return function() {
		// 		this.setIcon('../images/icons/bubble.png');
		// 	}
		// })(marker));
		// google.maps.event.addListener(marker, 'mouseout', (function(marker) {
		// 	return function() {
		// 		this.setIcon('../images/icons/bubble-a.png');
		// 	}
		// })(marker));
		google.maps.event.addListener(marker, 'click', (function (marker) {
			return function () {
				$('.objects-body__item').removeClass('active');
				var val = marker.get('data-href');
				$('#' + val).addClass('active');
				$(".objects-body-inner").mCustomScrollbar("scrollTo", '#' + val);
				return false;
			};
		})(marker));
	}
	moveMarker(map, marker);
}

function moveMarker(map, marker) {
	$('.objects-body__item').click(function () {
		$('.objects-body__item').removeClass('active');
		var coords = $(this).data('adr');
		var latlngStr = coords.split(',', 2);
		var lat = parseFloat(latlngStr[0]);
		var lng = parseFloat(latlngStr[1]);
		$(this).addClass('active');
		marker.setPosition(new google.maps.LatLng(lat, lng));
		map.panTo(new google.maps.LatLng(lat, lng));
	});
};

// load
$(window).on("load", function () {});
// load

// mobile sctipts
var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
$(window).on("load resize orientationchange", function () {
	if (screenWidth >= 767) {
		$(".address-list").mCustomScrollbar();
	}
});
$(window).on("resize", function () {
	$('.grid').isotope('layout');
});
// mobile sctipts
//# sourceMappingURL=main.js.map
